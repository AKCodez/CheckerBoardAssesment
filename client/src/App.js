import React, { Component } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import WakeUp from './WakeUp'
import PlanFive from './PlanFive'
import PlanFour from './PlanFour'
import PlanThree from './PlanThree'
import { API_URL } from './config'
import './App.css'
import Complies from './Complies'

const toastColor = { 
  background: '#505050', 
  text: '#fff' 
}

export default class App extends Component {
  
  state = {
    loading: true,
    uploading: false,
    images: [],
    planE: false,
    planD: false,
    planC: false,
    complies: false
  }

  componentDidMount() {
    fetch(`http://localhost:8080/wake-up`)
      .then(res => {
        if (res.ok) {
          return this.setState({ loading: false })  
        }
        const msg = 'Something is went wrong with Heroku' 
        this.toast(msg, 'custom', 2000, toastColor)
      })
  }

  toast = notify.createShowQueue()

  onChange = e => {
    const errs = [] 
    const files = Array.from(e.target.files)

    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time'
      return this.toast(msg, 'custom', 2000, toastColor)  
    }

    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
      }

      formData.append(i, file)
    })

    if (errs.length) {
      return errs.forEach(err => this.toast(err, 'custom', 2000, toastColor))
    }

    this.setState({ uploading: true })

    fetch(`http://localhost:8080/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(images => {
console.log(images)
      if(images[0].width === 802 && images[0].height === 697){
        this.setState({
          planE: true,
          loading:false,
          uploading: false
        })
      }
      else if(images[0].width === 736 && images[0].height === 451){
        console.log('ok')
        this.setState({
          complies: true,
          loading:false,
          uploading: false
        })
      }
      else if(images[0].width === 600 && images[0].height === 599){
        console.log('ok')
        this.setState({
          planC: true,
          loading:false,
          uploading: false
        })
      }
      else if(images[0].width === 480 && images[0].height === 360){
        console.log('ok')
        this.setState({
          planD: true,
          loading:false,
          uploading: false
        })
      }
      else {
        this.setState({
          uploading: false,
          images
        })
      }
    })
    .catch(err => {
      err.json().then(e => {
        this.toast(e.message, 'custom', 2000, toastColor)
        this.setState({ uploading: false })
      })
    })
    
  }

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  removeImage = id => {
    this.setState({ images: this.filter(id) })
  }

  onError = id => {
    this.toast('Oops, something went wrong', 'custom', 2000, toastColor)
    this.setState({ images: this.filter(id) })
  }
  
  render() {
    const { loading, uploading, images, planE,planD,planC, complies} = this.state
    const content = () => {

      switch(true) {
        case loading:
          return <WakeUp />
        case uploading:
          return <Spinner />  
          case images.length > 0:
            return <Images 
                    images={images} 
                    removeImage={this.removeImage} 
                    onError={this.onError}
                   />
            case planE:
              return  <PlanFive/>
              case planD: 
              return <PlanFour/>
              case planC: 
              return <PlanThree/>
              case complies: 
              return <Complies/>
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div className='container'>
        <Notifications />
        <div className='buttons'>
          {content()}
        </div>

      </div>
    )
  }
}
