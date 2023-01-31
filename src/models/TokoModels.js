import mongoose from "mongoose"

const tokoSchema = new mongoose.Schema({
    toko: {
        required: true,
        type: String
    },
    barang : [
        {
            nama :{
                type : String,
                required: true
            },
            harga :{
                type: Number,
                required: true
            },
            jumlah : {
                type: Number,
                required: true
            },
            diskon : {
                type: Number,
            },
            value : {
                type: Number,
                default: 0
            },
            image : {
                type: String,
                required: true
            }

        }
    ]
})

const Toko = mongoose.model('toko', tokoSchema)

export default Toko

// penjelasan:
// kita menggunakan mongoose untuk menghubungkan ke database
// kita menggunakan mongoose.Schema untuk membuat schema
// kita menggunakan mongoose.model untuk membuat model
// kita menggunakan export default Toko untuk mengexport model

// kita menggunakan tokoSchema untuk membuat schema
// kita menggunakan toko untuk membuat model
// kita menggunakan export default Toko untuk mengexport model
