const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{ 
    const productData = await Tag.findAll({
    include: [{model: Product}]
    });
    res.status(200).json(productData);
  }catch(err){
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const productData = await Tag.findByPK(req.params.id, {
    include: [{model: Product}] 
    });
   if(!productData){
     res.status(404).json({ message: 'No Product found with this id'});
     return;
    res.staus(200).json(productData);
   } catch (err) {
     res.status(400).json(err);
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try { 
    const productData = await Tag.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
Tag.update(
  {
    tag_id: req.body.id,
  },
  {
    where: {
    tag_id : req.params.id
    },
  }
 )
  .then(updatedTag) => {
res.json(updatedTag);
})
.catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      tag_id: req.params.id,
    },
  })
  .catch((err) => res.json((err));    
});

module.exports = router;
