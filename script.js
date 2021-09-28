
var images = [
    "https://image.shutterstock.com/image-illustration/group-funny-happy-family-cartoon-260nw-1573813642.jpg",
    "https://st.depositphotos.com/1077687/1903/v/950/depositphotos_19036597-stock-illustration-cartoon-boy.jpg",
    "https://png.pngtree.com/png-clipart/20190516/original/pngtree-hand-drawn-character-walking-lady-sister-illustration-cartoon-card-love-commercial-png-image_4026263.jpg",
    "https://image.shutterstock.com/image-vector/working-mom-260nw-158801603.jpg",
     "https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg",
    ];
    
    var i = 0;
    function nextimage() { 
     
       if(i == 5)
         {
           i=0;
         }
       
        document.getElementById("album").src = images[i];
      i++;
     
    }