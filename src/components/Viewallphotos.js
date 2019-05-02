import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as fetchPhotos from '../store/actions/fetchPhotos';

class ViewAllPhotos extends Component{
    
    componentDidMount(){
        this.props.onPhotoFetched()
    }
    
    render(){

        let photos = this.props.photoList
        let photo = photos.map((p)=>{
            return(
                <div>
                <h1>{p.title}</h1>
                <img src={p.url}></img>
                </div>
            )
        })
        return(
            <ul>{photo}</ul>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        photoList: state.photos
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        onPhotoFetched: (photos) => dispatch(fetchPhotos.photoFetched())
    }

}

export default connect(mapStateToProps,  mapDispatchToProps)(ViewAllPhotos)