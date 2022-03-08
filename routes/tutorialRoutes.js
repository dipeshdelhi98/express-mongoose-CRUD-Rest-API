const express=require('express');

const router=express.Router();

const {create,findAll,findById,updateById,deleteById}=require('../controllers/tutorialControllers')

router.post('/',create);

router.get('/',findAll);

router.get('/:id',findById)

router.put('/:id',updateById)

router.delete('/:id',deleteById)


module.exports = router;