import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const AboutPage = (props) => {

    return(
       <div>
           <Hero title={props.title}/>
           <Content>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum aut molestiae accusamus laboriosam inventore eaque tenetur incidunt dolor expedita velit in, accusantium unde at, similique natus minus ipsa voluptatibus.</p>
           </Content>

       </div>
    )
}

export default AboutPage;