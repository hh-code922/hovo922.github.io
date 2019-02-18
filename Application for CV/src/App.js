import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTracks } from './action/tracks'
import Template from './template/main.js'
import  './main.css'





class App extends React.Component {
    constructor(props) {
      super(props);
     this.handleClick = this.handleClick.bind(this);
     this.findeClick = this.findeClick.bind(this);
     this.infoClick = this.infoClick.bind(this);
     this.socClick = this.socClick.bind(this);
     this.experianceClick = this.experianceClick.bind(this);
     this.skillsClick = this.skillsClick.bind(this);
     this.languagesClick = this.languagesClick.bind(this);
     this.educationClick = this.educationClick.bind(this);
     this.imgClick = this.imgClick.bind(this);
     this.professionClick= this.professionClick.bind(this);
     this.finishClick = this.finishClick.bind(this);
    
    
     this.state = {file: '',imagePreviewUrl: '', door: false};
     
    
     
  
    }
  
    handleClick(){
       
        console.log('addTrack', this.myInput.value);
        this.props.onAddTrack(this.myInput.value);
        this.myInput.value = '';
       
    }

    findeClick(){
        console.log(this.findInput.value);
        this.props.onFindeName(this.findInput.value);
        this.findInput.value = '';
    }

    infoClick(){
       this.props.onGetInfo(this.infoInput.value,this.selectInfo.value);
       this.infoInput.value = '';
     
    }

    socClick(){
       /* this.props.onGetSocialInfo(this.socInput.value,this.selectsocInfo.value);
        this.socInput.value = '';*/
        this.props.onGetSocialInfo(this.socInput.value,this.selectSocInfo.value);
        this.socInput.value = '';
        
      
    }


    experianceClick(){
       this.props.onGetExperiancInfo(this.experianceInput.value,this.experianceTimeInput.value)
       this.experianceInput.value = '';
       this.experianceTimeInput.value = '';
    }

    skillsClick(){

       this.props.onGetSkillsInfo(this.skillsInput.value);
       this.skillsInput.value = '';
    }
    
    languagesClick(){
        this.props.onGetLanguagesInfo(this.languagesInput.value);
        this.languagesInput.value = '';
    }

    educationClick(){
        this.props.onGetEducationInfo(this.educationInput.value,this.educationTime.value);
        this.educationInput.value =  '';
        this.educationTime.value = '';

    }

    imgClick(e){
        
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file);

    }

   
    professionClick(){
        
        this.props.onGetProfessionInfo(this.professionInput.value);
        this.professionInput.value = '';
    }

    finishClick(){
        this.setState({door:true});
    }
    
   
    render() {
       
      
       
       let door = this.state.door? 'on':'';
      return (


       <div>
           <div className = {door}>

            <input type="text" ref={(input) => { this.myInput = input; }}  />
            <button onClick = {this.handleClick}>Add track</button>

            <input type="text" ref={(input) => { this.findInput = input; }} />
            <button onClick = {this.findeClick}>Finde</button>
            <ul>
            {
                this.props.tracks.map((track, index) =>
                 <li key={index}>{track.name}</li>)
            }
            </ul>

            <div>
                <button onClick={this.props.onGetTracks}>Get tracks</button>
            </div>


            <div>

                <input type="file"  accept='image/*' onChange={(e)=>this.imgClick(e)}/>
                <button >Add Photo</button>
                
            </div>


            <div>

                <input type="text"placeholder="Info about youe" ref={(input) => { this.infoInput = input; }} />
                <select ref={(input) => { this.selectInfo = input; }} >
                    <option value="Name">Name</option>
                    <option value="Adress">Andress</option>
                    <option value="Phone">Phone</option>
                    
                </select>
                <button onClick = {this.infoClick}>Send info</button>

            </div>
            
            <div>
                <input type="text" placeholder="your soce adresses" ref={(input) => { this.socInput = input; }} />
                    <select ref={(input) => { this.selectSocInfo = input; }} >
                        <option value="Email">Email</option>
                        <option value="Your Site">Your Site</option>
                        <option value="Github">Github</option>
                        
                    </select>
                    <button onClick = {this.socClick}>Send info</button>
            </div>

             <div>
                 <input type="text" placeholder ="profession" ref={(input) => { this.professionInput = input; }} />
                <button onClick = {this.professionClick}>Send info</button> 
            </div> 


            <div>
                 <input type="text" placeholder ="experiance" ref={(input) => { this.experianceInput = input; }} />
                <input type="text" placeholder="time 2010-2015" ref={(input) => { this.experianceTimeInput = input; }} />
                <button onClick = {this.experianceClick}>Send info</button> 
            </div> 

            <div>
                 <input type="text" placeholder ="skills" ref={(input) => { this.skillsInput = input; }} />
                <button onClick = {this.skillsClick}>Send info</button> 
            </div> 

            <div>
                 <input type="text" placeholder ="languages" ref={(input) => { this.languagesInput = input; }} />
                <button onClick = {this.languagesClick}>languages</button> 
            </div>  

             <div>
                 <input type="text" placeholder ="Educations" ref={(input) => { this.educationInput = input; }} />
                 <input type="text" placeholder ="Time 2010-2015" ref={(input) => { this.educationTime = input; }} />
                <button onClick = {this.educationClick}>Educations</button> 
            </div>   

               <div>
                    <button onClick = {this.finishClick}>FINISH</button>
                </div>
         </div>         

                <Template st = {this.state} name = {this.props.Info} social= {this.props.socInfo} profession = {this.props.profession} experiance ={this.props.experiance} Skills = {this.props.Skills}  Languages = {this.props.Languages} Education = {this.props.Education}  />
           
               
      </div>
      
      
      );
    }
  }
  
  

  export default connect(
      
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.findeName)),
         playLists: state.playLists,
         AddImg: state.AddImg,
         Info:state.Info,
         socInfo:state.Social,
         experiance:state.Experiance,
         Skills: state.Skills,
         Languages: state.Languages,
         Education: state.Education,
         profession: state.Profession
        
    }),
    dispatch => ({  
        
        onAddTrack: (name) =>{
            const payload = {
                id: Date.now().toString(),
                name
            } 
            dispatch({type: 'ADD_TRACK',payload: payload})
        },
        
       onFindeName: (serchname)=>{
            dispatch({type:"FIND_TRACK", payload: serchname})
        },

        onGetTracks: () => {
            
            dispatch( getTracks());
          },
          onGetInfo: function(info,categoria){
             
                const obj = {
                    Categoria: categoria,
                    Info: info
                }
                  return dispatch({type: "info",payload: obj});
              
          },


          onGetImg: function(info){
             
            const obj = {
                Categoria: 'Img',
                Info: info
            }
              return dispatch({type: "img",payload: obj});
          
      },


          onGetSocialInfo: function(info,categoria){
             
            const obj = {
                Categoria: categoria,
                Info: info
            }
              return dispatch({type: "social",payload: obj});
          
      },

      onGetExperiancInfo: function(info,time){
             
        const obj = {
            Categoria: "Experiance",
            Info: info,
            time:time
        }
          return dispatch({type: "experiance",payload: obj});
      
  },
  
  onGetSkillsInfo: function(info){
             
    const obj = {
        Categoria: "Skills",
        Info: info
        
    }
      return dispatch({type: "Skills",payload: obj});
  
},


onGetLanguagesInfo: function(info){
             
    const obj = {
        Categoria: "languages",
        Info: info
        
    }
      return dispatch({type: "languages",payload: obj});
  
},

onGetEducationInfo: function(info,time){
             
    const obj = {
        Categoria: "Education",
        Info: info,
        Time: time
        
    }
      return dispatch({type: "education",payload: obj});
  
},

onGetProfessionInfo: function(info){
             
    const obj = {
        Categoria: "Profession",
        Info: info,
        
        
    }
      return dispatch({type: "profession",payload: obj});
  
}



    })
  )(App);