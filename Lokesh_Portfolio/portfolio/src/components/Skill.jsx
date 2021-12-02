import React from 'react'
import './Skill.css'
export default function Skill() {
    return (
        <div className="skill component__space" id="Skill">
            <div className="skill_text">My Skills</div>
            <div className="flax-box">
                <div className="box">
                    <p className="skill-text">HTML</p>
                </div>
                <div className="box">
                    <p className="skill-text">CSS</p>
                </div>
                <div className="box">
                    <p className="skill-text">JavaScript</p>
                </div>
                <div className="box">
                <p className="skill-text">ReactJS</p>
                    </div>
                <div className="box">
                <p className="skill-text">Node</p>
                </div>
                <div className="box">
                <p className="skill-text">Express</p>
                    </div>
                <div className="box">
                <p className="skill-text">MongoDB</p>
                    </div>
                <div className="box">
                <p className="skill-text">GIT</p>
                    </div>
            </div>
        </div>
    )
}
