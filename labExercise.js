var slideshow={
	photoList:['cat.jpg','dog.jpg','car.jpg','sea.jpg','tree.jpg','sun.jpg'],
	currentPhotoIndex:0,

	currentPhoto:function(){
			console.log("Current Photo : " + this.photoList[this.currentPhotoIndex]);		
		},

	nextPhoto:function(){
			
			if (this.currentPhotoIndex <this.photoList.length-1) {
				this.currentPhotoIndex+=1;
				this.play();
				console.log('Next Photo is : ' + this.photoList[this.currentPhotoIndex]);
				
			}
			else{
				console.log('End of the slideshow');
				this.pause();
				}			
			},
	prevPhoto:function(){
			
			if (this.currentPhotoIndex <this.photoList.length) {
				this.currentPhotoIndex--;
				console.log('Prev Photo is : ' +this.photoList[this.currentPhotoIndex]);	
			}
			else{
				console.log('End of the slideshow');
				}		
			},
	playInterval : null,
	play:function(){
		
		this.playInterval=setTimeout(function(){
			this.nextPhoto();}.bind(this),2000);
		
	 } ,
	pause:function(){
		clearInterval(this.playInterval);
	},
}

slideshow.currentPhoto();

slideshow.play();


