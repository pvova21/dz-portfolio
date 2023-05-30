import '../ProjectList.css';

export default function ProjectList({projects}) {
    const projectItem = projects.map((item, index) => <div key={index} className='projects_item'><img src={item.img} alt={item.category}/></div>);
     return (
         <div className='projects_list'>{projectItem}</div>
     )
}