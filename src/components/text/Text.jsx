//CSS
import './Text.css'

// {links && <a href={links} target="_blank" rel="noreferrer noopener">{links}</a>}

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
          {
            links &&
              Array.isArray(links) 
              ? links.map(
                certificate => 
                <a 
                  href={certificate} 
                  key={certificate}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {certificate}
                </a> 
              ) 
              : <a href={links} target="_blank" rel="noreferrer noopener">{links}</a>
          }
    </div>
  )
}

export default Text