import React from 'react';
import Feature from '../../components/feature/Feature';
import './gpt3.css';

const GPT3 = () => {

    return (
            <div className="gpt3_container section_margin" id="gpt3">
                <div className="gpt3-top">
                    <Feature title="What Is GPT-3?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
                </div>
                <div className="gpt3-heading">
                    <h1>Possibilities Are Beyond Your Imagination</h1>
                    <p>Explore The Library</p>
                </div>
                <div className="gpt3-bottom">
                    <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."  />
                    <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
                    <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
                </div>
            </div>
    )

}

export default GPT3;