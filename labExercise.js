var slideshow={
	photoList:['cat.jpg','dog.jpg','car.jpg','sea.jpg'],
	currentPhotoIndex:0,

	currentPhoto:function(){
			console.log("Current Photo : " + this.photoList[this.currentPhotoIndex]);		
		},

	nextPhoto:function(){
			
			if (this.currentPhotoIndex <this.photoList.length-1) {
				this.currentPhotoIndex+=1;
				console.log('Next Photo is : ' + this.photoList[this.currentPhotoIndex]);
				
			}else{
				console.log('End of the slideshow');
				}		
			},
	prevPhoto:function(){
			
			if (this.currentPhotoIndex <this.photoList.length) {
				this.currentPhotoIndex--;
				console.log('Prev Photo is : ' +this.photoList[this.currentPhotoIndex]);	
			}else{
				console.log('End of the slideshow');
				}		
			},		
	}
console.log(slideshow.photoList);	
slideshow.currentPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.currentPhoto();
slideshow.nextPhoto();
slideshow.currentPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.currentPhoto();
slideshow.nextPhoto();
