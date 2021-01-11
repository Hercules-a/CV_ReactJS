import React, { Component } from 'react';
import photo from './assets/photo.jpg'

class HeaderPl extends Component {
    render() {
        return (
            <div className='index'>
                <header>
                    <div className="row">
                        <h5 className="col-7">
                            <b>
                                Dawid Herkt
                            </b><br />
                                <a href="tel:+48724288696" className="links">
                                    <i className='fa fa-phone'></i> 724 288 696</a><br />
                                <a href="mailto:dawid.herkt1@gmail.com" className="links">
                                    <i className="fa fa-envelope"></i> dawid.herkt1@gmail.com</a><br />
                                <a href="https://github.com/PythonXCII" rel="noreferrer" target="_blank" className="links">
                                    <i className="fa fa-github"></i> GitHub</a><br />
                                <a href="https://www.linkedin.com/in/dawid-herkt-737821114/" rel="noreferrer" target="_blank" className="links">
                                    <i className="fa fa-linkedin"></i> LinkedIn</a>
                            </h5>
                        
                        <div className="col"><img id="photo" src={photo} alt="img" /></div>
                    </div>
                </header>

                <nav className="list-group list-group-horizontal list-group-sm">
                    <a href="education_pl.html" target="content"
                        className="text-center list-group-item list-group-item-primary list-group-item-action">
                            <i className="fa fa-graduation-cap"></i> Edukacja</a>
                        <a href="experience_pl.html" target="content"
                        className="text-center list-group-item list-group-item-primary list-group-item-action">
                            <i className="fa fa-briefcase"></i> Doświadczenie</a>
                        <a href="skills_pl.html" target="content"
                        className="text-center list-group-item list-group-item-primary list-group-item-action">
                            <i className="fa fa-puzzle-piece"></i> Umiejętności</a>
                        <a href="projects_pl.html" target="content"
                        className="text-center list-group-item list-group-item-primary list-group-item-action">
                            <i className="fa fa-tasks"></i> Projekty</a>
                        <a href="interests_pl.html" target="content"
                        className="text-center list-group-item list-group-item-primary list-group-item-action">
                            <i className="fa fa-gamepad"></i> Zainteresowania</a>

                        <a href="en.html" className="text-center list-group-item list-group-item-info list-group-item-action">
                            <i className="fa fa-flag"> English</i></a>
                </nav>
            </div>
        )
    }
}

export default HeaderPl;