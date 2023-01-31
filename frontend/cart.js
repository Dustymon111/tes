fetch('http://localhost:3000/api',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((res) => res.json())
.then((data) => {
    const content = document.getElementById('root')
    let i=0;
    data.map((item) => (
        item.barang.map((brg) =>{
            content.innerHTML +=
            `<div class="box">
                         <p>${item.toko}</p>
                         <div class="img-box">
                             <img class='images' src="${brg.image}" </img>
                         </div>
                         <div class="bottom">
                             <p class="nama-barang">${brg.nama}</p>
                             <h2>Rp. ${brg.harga}.00</h2>
                             <div ="clear: both;">
                              <button id="decrement" onClick="decrement()">-</button>
                              <input type="text" id="item-quantity" value="${brg.value}">
                              <button id="increment" onClick="increment()">+</button>
                             </div>
                             <div="diskondiv">
                              <h2> DISKON ${brg.diskon}% </h2>
                             </div>
                             `+
                            "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
                        `</div>
                    </div>`
        }) 
    )).join('')
    
})

const cart = [];
console.log(cart)
function addtocart(a){
  fetch('http://localhost:3000/api',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((res) => res.json())
.then((data) => {
    let i=0;
    data.map((item) => (
        item.barang.map((brg) =>{
            if(a==i){
              cart.push(brg);
            }
            i++;
        }
        )

    )).join('')
    displaycart();
})
}

function lert(){
  if (cart.length > 0) 
    alert("Terima Kasih Sudah Membayar");
  else{
    alert("Tidak ada barang Yang Dibeli");
  }
}

function del(a){
  fetch(`http://localhost:3000/del/${a}`,{method : "DELETE"})
  cart.splice (a,100);
  displaycart();
}


function delElement(a){
  cart.splice(a,1);
  displaycart();
}

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const itemQuantity = document.getElementById("item-quantity");

decrementButton.addEventListener("click", function() {
  itemQuantity.value = parseInt(itemQuantity.value) - 1;
});

incrementButton.addEventListener("click", function() {
  itemQuantity.value = parseInt(itemQuantity.value) + 1;
});

function displaycart(){
  let j = 0, total = 0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
    document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
    document.getElementById('total').innerHTML = "Rp."+0+".00";
  }
  else{
    document.getElementById('cartItem').innerHTML = cart.map((item) => 
    {
      const {image,nama,harga,diskon} = item;
      if (diskon !== 0){
        newHarga = harga - (harga * diskon / 100);
      }
      total=total+newHarga;
      document.getElementById('total').innerHTML = "Rp."+total+".00";
      return(
        `<div class='cart-item'>
        <div class='row-img'>
          <img class='rowimg' src=${image}>
        </div>
        <p style='font-size:12px;'>${nama}</p>
        <h2 style='font-size: 15px;'>Rp. ${harga}.00</h2>`+
        "<i class='bi bi-trash-fill' onclick='delElement("+(j++)+")'></i></div>"+
        `</div>`);
    }).join('');
  } 
}

// penjelasan:

// fetch itu untuk mengambil data dari database
// method GET untuk mengambil data
// method POST untuk menambahkan data
// method PUT untuk mengubah data
// method DELETE untuk menghapus data
// headers untuk menentukan tipe data yang akan diambil
// res.json() untuk mengubah data yang diambil menjadi json
// data.map untuk mengambil data dari json

// fungsi yang saya buat:
// 1. saya membuat fungsi addtocart untuk menambahkan barang ke dalam cart
// 2. fungsi displaycart untuk menampilkan barang yang ada di dalam cart
// 3. fungsi del untuk menghapus semua barang yang ada di dalam cart
// 4. fungsi delElement untuk menghapus barang yang dipilih di dalam cart
// 5. fungsi lert untuk menampilkan alert jika cart tidak kosong

// terima kasih