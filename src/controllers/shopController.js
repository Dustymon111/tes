import Toko from "../models/TokoModels.js"
import data from "../js/products.json" assert {type: "json"} 

export const getToko = async (req, res) => {
    try{
        const toko = await Toko.find()
        res.status(200).json(toko)
    }catch(err){
        res.json({message: err})
    }
}

export const getTokoById = async (req, res) => {
    try{
        const toko = await Toko.findById(req.params.id)
        res.status(200).json(toko)
    }catch(err){
        res.status(400).json({message: err})
    }
}

export const saveToko = async (req, res) => {
    try{
        req.body.map(async x => {
            await Toko.create(x)
        })
        res.status(200).json({message: "Success"})
    }catch(err){
        res.status(400).json({message: err})
    }
}

export const deleteToko = async (req, res) => {
    try{
        const toko = await Toko.findById(req.params.id)
        await toko.delete()
        res.status(200).json({message: "Success"})
    }catch(err){
        res.status(400).json({message: err})
    }
}

export const updateToko = async (req, res) => {
    try{
        const toko = await Toko.findById(req.params.id)
        await toko.updateOne
        res.status(200).json({message: "Success"})
    }catch(err){
        res.status(400).json({message: err})
    }
}

export const deleteAllToko = async (req, res) => {
    try{
        await Toko.deleteMany()
        res.status(200).json({message: "Success"})
    }catch(err){
        res.status(400).json({message: err})
    }
}


// penjelasan:
// kita menggunakan import Toko from "../models/TokoModels.js" untuk mengimport model Toko
// kita menggunakan import data from "../js/products.json" assert {type: "json"} untuk mengimport data json
// kita menggunakan export const getToko = async (req, res) => {} untuk membuat fungsi getToko
// kita menggunakan export const getTokoById = async (req, res) => {} untuk membuat fungsi getTokoById
// kita menggunakan export const saveToko = async (req, res) => {} untuk membuat fungsi saveToko
// kita menggunakan export const deleteToko = async (req, res) => {} untuk membuat fungsi deleteToko
// kita menggunakan export const updateToko = async (req, res) => {} untuk membuat fungsi updateToko
// kita menggunakan export const deleteAllToko = async (req, res) => {} untuk membuat fungsi deleteAllToko

// kita menggunakan try{} untuk mengecek apakah ada error atau tidak

// kita menggunakan const toko = await Toko.find() untuk mengambil semua data dari model Toko
// kita menggunakan res.status(200).json(toko) untuk mengirimkan response dengan status 200 dan data toko

// kita menggunakan const toko = await Toko.findById(req.params.id) untuk mengambil data dari model Toko berdasarkan id
// kita menggunakan res.status(200).json(toko) untuk mengirimkan response dengan status 200 dan data toko

// kita menggunakan req.body.map(async x => { await Toko.create(x) }) untuk membuat data baru di model Toko
// kita menggunakan res.status(200).json({message: "Success"}) untuk mengirimkan response dengan status 200 dan pesan Success

// kita menggunakan await toko.delete() untuk menghapus data dari model Toko

// kita menggunakan await toko.updateOne untuk mengupdate data dari model Toko

// kita menggunakan await Toko.deleteMany() untuk menghapus semua data dari model Toko

// kita menggunakan catch(err){ res.status(400).json({message: err}) } untuk mengirimkan response dengan status 400 dan pesan error

// kita menggunakan res.status(400).json({message: err}) untuk mengirimkan response dengan status 400 dan pesan error
