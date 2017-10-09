

/////////////////////////////////////////////
var itemList = [
  {
    "link":"https://images.unsplash.com/photo-1497630955301-69c95387218f?dpr=1&auto=compress,format&fit=crop&w=2134&h=&q=80&cs=tinysrgb&crop=",
    "price": 180.99,
    "name": "Dark chocolate"
  },
  {
    "link":"https://images.unsplash.com/photo-1496360864286-5dbec8933908?dpr=1&auto=compress,format&fit=crop&w=2134&h=&q=80&cs=tinysrgb&crop=",
    "price": 380.99,
    "name": "Sweet lollipop"
  },
  {
    "link":"https://images.unsplash.com/photo-1475180098004-ca77a66827be?dpr=1&auto=compress,format&fit=crop&w=2133&h=&q=80&cs=tinysrgb&crop=",
    "price": 480.99,
    "name": "Tiny butterfly"
  },
  {
    "link":"https://images.unsplash.com/photo-1495298599282-d8920eb5009b?dpr=1&auto=compress,format&fit=crop&w=2134&h=&q=80&cs=tinysrgb&crop=",
    "price": 80.99,
    "name": "Charming bee"
  },
  {
    "link":"https://images.unsplash.com/photo-1504791635568-fa4993808e0a?dpr=1&auto=compress,format&fit=crop&w=2134&h=&q=80&cs=tinysrgb&crop=",
    "price": 39.99,
    "name": "Brave soldier"
  },
]

var promoList = [
  {
    "link":"./../img/promotion.png",
    "price": "50% OFF THROUGH 01/02/18",
    "name": "LIMITED QUANTITY!"
  }
]

var item=itemList[2];

$(".item-box").html(`
  <div class="row">
  <div class="col item-pic">
    <img class="img img-fluid" src="${item.link}" alt="">
  </div>
</div>
<div class="item-info">
  <p>${item.name}<br>
  $${item.price}</p>
</div>
`
);

var index=0;
for(var i=1; i < 16; i++){

  if(index===itemList.length-1) {
    index=0;
  } else {
    index+=1;
  }
  item=itemList[index];

  var itemBoxBlock= $(".item-box:last").clone().html(`
    <div class="row">
    <div class="col item-pic">
        <img class="img img-fluid" src="${item.link}" alt="">
      </div>
    </div>
    <div class="div">
      <p>${item.name}<br>
      $${item.price}</p>
    </div>
    `);

  $(".item-grid").append(itemBoxBlock);
}

var promoItem = promoList[0];
var promoBox = $(".item-box:last").clone().html(`
  <div class="row">
    <div class="col item-pic">
        <img class="img img-fluid" src="${promoItem.link}" alt="">
      </div>
  </div>
  <div class="div">
    <p class="text-center small">${promoItem.name}<br>
    ${promoItem.price}</p>
  </div>
  `);

// $(".item-grid").append(promoBox);
setTimeout(function() {
  $(".item-grid").prepend(promoBox).children().first().hide();
  $(".item-grid").children().first().show(2000)

  $(".item-box:last").hide();
}, 6000);
