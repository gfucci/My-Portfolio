//CSS
import './Text.css'

const Text = (
    {
        title, 
        subtitle, 
        paragraph, 
        year, 
        study, 
        graduate,
        links
    }) => {

  return (
    <div className='text_container'>
        <h3>{title}</h3>
          {subtitle && <span>{subtitle}</span>}
          {year && <span> | {year}</span>}
          {study && <span> | {study}</span> }
          {graduate && <span> | {graduate}</span> }
          {paragraph && <p>{paragraph}</p>}
          {links && <a href={links} target="_blank" rel="noreferrer noopener">{links}</a>}
    </div>
  )
}

export default Text