var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate> 
      <banner> 
        <title>RandomTV</title>
      </banner>
      //add stuff here
      //1.
      <list> 
        <section> 
          //2.
	  <listItemLockup> 
	    <title>Jorge Cremades</title>
	    <decorationLabel>5</decorationLabel>
	    <relatedContent> 
	      <grid>
	        <section> 
                  //2
		  <lockup videoURL="http://www.rwdevcon.com/videos/Ray-Wenderlich-Teamwork.mp4">
		    <img src="${this.BASEURL}images/jc1.png" width="500" height="308" />
		  </lockup>
		  <lockup videoURL="http://www.rwdevcon.com/videos/Ryan-Nystrom-Contributing.mp4">
		    <img src="${this.BASEURL}images/jc2.png" width="500" height="308" />
		  </lockup>									
	          <lockup videoURL="http://www.rwdevcon.com/videos/Matthijs-Hollemans-Math-Isnt-Scary.mp4">
		    <img src="${this.BASEURL}images/jc3.png" width="500" height="308" />
		  </lockup>									
		  <lockup videoURL="http://www.rwdevcon.com/videos/Vicki-Wenderlich-Identity.mp4">
		    <img src="${this.BASEURL}images/jc4.png" width="500" height="308" />
		  </lockup>									
	          <lockup videoURL="http://www.rwdevcon.com/videos/Alexis-Gallagher-Identity.mp4">
		    <img src="${this.BASEURL}images/jc5.png" width="500" height="308" />
	          </lockup>									
		</section>
	      </grid>
	    </relatedContent>
	  </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}