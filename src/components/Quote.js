import React from 'react'
import '../index.css';


function Quote({quote}) {
    return (
        <div className="quote">
           <div className="anime" title={quote.anime}>{quote.anime}</div>

           <blockquote>
              {quote.quote}
           </blockquote>
           <div className="character" title={quote.charcter}>{quote.charcter}</div>
            
        </div>
    )
}

export default Quote
