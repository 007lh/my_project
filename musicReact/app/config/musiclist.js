import $ from 'jquery'
var MUSIC_LIST=[{
		title: '天使中的魔鬼',
		artist: '田馥甄',
		file: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3',
		cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.jpg'
	}];

$.ajax({
         url: 'http://localhost:9000',
         type: 'get',
         dataType: 'jsonp',
             //data: postData,
         jsonpCallback:"cb",
         success: function(data){
							 console.log('hello ajax')
               console.log(data)
               //results = data.query.search;
              // console.log(results)
              data.forEach(function(item,i){
                console.log(i)
                console.log(item)
                console.log('data='+data[i])
                MUSIC_LIST.push(item)
              })
							 //MUSIC_LIST.concat(data);
               //console.log(MUSIC_LIST)
						 },
           error:function(err){
             alert('f')
               console.log(err);
             }
         })
         console.log(MUSIC_LIST)
export default MUSIC_LIST;
