import React, {Component} from 'react';

export default class Template extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        let {imagePreviewUrl} = this.props.st;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return(
           /* <div className ='cv_container'>

               <div className = 'left_part'>

                    <div className = 'photo'></div>
                    <div className = 'info'>

                        <h2>Info</h2>
                        <div className = 'block_name'>
                            <div className ="icon"></div>
                            <div className ='info_mame'>
                                <h3>Name</h3>
                            </div>
                        </div>

                        <div className = 'block_adress'>
                            <div className ="icon"></div>
                            <div className ='info_adress'>
                                <h3>Adress</h3>
                            </div>
                        </div>

                        <div className = 'block_phone'>
                            <div className ="icon"></div>
                            <div className ='info_phone'>
                                <h3>Phone</h3>
                            </div>
                        </div>

                    </div>
                    
                    <div className ='social'>
                        <h2>Social</h2>
                        <div className = 'block_Email'>
                            <h3>Email</h3>
                            <ul>
                                
                            </ul>
                            
                        </div>

                        <div className = 'block_your_sites'>
                            <h3>web Sites</h3>
                            <ul>
                                
                            </ul>
                            
                        </div>

                        <div className = 'block_github'>
                            <h3>Github</h3>
                            <ul>
                                
                            </ul>
                            
                        </div>


                    </div>
               </div>
               
               <div className = 'right_part'>

                    <div className = 'header'>
                        <p>CV-RESUME</p>
                        <h4>Name Surname</h4>
                        <p>Profession</p>
                    </div>

                    <div className = 'content'>

                        <div className ='block_experiance'>
                        <h2>Experiance</h2>
                            <ul>experiance</ul>
                        </div>

                        <div className = 'block_skills'>
                        <h2>Skills</h2>
                            <ul>skills</ul>
                        </div>

                         <div className = 'block_languages'>
                         <h2>Languages</h2>
                            <ul>languages</ul>
                        </div>

                         <div className = 'block_education'>
                         <h2>Education</h2>
                            <ul>education</ul>
                        </div>


                    </div>
               </div>
            </div>*/


            <div id="container">
                    <div id="part_left" className="info">
                        <div id="photo">
                            {$imagePreview}
                        </div>
                        <div id="info">
                            <h2>INFO</h2>
                            <div className="about">
                                <div className="icon">
                                    <i className="fas fa-male"></i>
                                </div>
                                <div className="text">
                                    <h2>Name</h2>
                                    {this.props.name.map(function(item,index){if(item.Categoria === "Name")return <p key={index}>{item.Info}</p>})}
                                </div>
                            </div>
                            <div className="about">
                                    <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="text">
                                        <h2>Adress</h2>
                                        {this.props.name.map(function(item,index){if(item.Categoria === "Adress")return <p key={index}>{item.Info}</p>})}
                                    </div>
                            </div>
                            <div className="about">
                                    <div className="icon">
                                            <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="text">
                                        <h2>Phone</h2>
                                        
                                            {this.props.name.map(function(item,index){if(item.Categoria === "Phone")return <p key={index}>{item.Info}</p>})}
                                        
                                    </div>
                            </div>
                        </div>
                        <div id = "social">
                            <h2>SOCIAL</h2>
                            <div className="socialInfo">
                                    
                                    <div className="socTexttext mail">
                                        <h2>Email</h2>
                                        {this.props.social.map(function(item,index){if(item.Categoria === "Email")return <p key={index}>{item.Info}</p>})}
                                    </div>
                            </div>
                            <div className="socialInfo">
                                    
                                    <div className="socTexttext git">
                                    
                                        <h2>Your Site</h2>  
                                        {this.props.social.map(function(item,index){if(item.Categoria === "Your Site")return <p key={index}>{item.Info}</p>})}
                                        <h2>Github</h2>
                                        {this.props.social.map(function(item,index){if(item.Categoria === "Github")return <p key={index}>{item.Info}</p>})}  
                                         
                                    </div>
                            </div>
                        </div>
                    </div>


                    <div id="part_right" className="info">
                        <div id = "main">
                                <h3>CV-RESUME</h3>
                                {this.props.name.map(function(item,index){if(item.Categoria === "Name")return <h2 key={index}>{item.Info}</h2>})}
                                {this.props.profession.map(function(item,index){if(item.Categoria === "Profession")return <p key={index}>{item.Info}</p>})}

                        </div>

                        

                        <div id="part_1">
                                <div id="experience" className="allmain">
                                        <h2>EXPERIENCE</h2>
                                        <div id="experianceBlock">
                                            <ul>
                                                {this.props.experiance.map(function(item,index){if(item.Categoria === "Experiance")return <li key={index}>{item.Info} - ({item.time})</li>})}
                                            </ul>
                                        </div>
                                </div>
                                <div id="skils" className="allmain">
                                        <h2>SKILLS</h2>
                                        <div id="skillsBlock">
                                            <ul>
                                                
                                            {this.props.Skills.map(function(item,index){if(item.Categoria === "Skills")return <li key={index}>{item.Info}</li>})}
                                            </ul>
                                        </div>
                                </div>
                                <div id="languages" className="allmain">
                                        <h2>LANGUAGES</h2>
                                        <div id="languagesBlock">
                                            <ul>
                                                {this.props.Languages.map(function(item,index){if(item.Categoria === "languages")return <li key={index}>{item.Info}</li>})}
                                            </ul>
                                        </div>
                                </div>
                        </div>

                        

                        <div id="part_2" className="allmain">
                            
                            <div id="education">
                                <h2>EDUCATION</h2>
                                <div id="edductionBlock">
                                    <ul>
                                        {this.props.Education.map(function(item,index){if(item.Categoria === "Education")return <li key={index}>{item.Info} - ({item.Time})</li>})}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
        
    }

}