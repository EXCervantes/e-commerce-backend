const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productData = await Product.findAll({
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      include: [
        {
          model: Tag,
          attributes: ['id', 'tag_name'],
          through: 'ProductTag'
        },
        {
          model: Category,
          attributes: ['id', 'category_name']
        }
      ]
    })

    res.status(200).json(productData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteProduct = await Product.destroy({
      where: { id: req.params.id }
    });
    if (!deleteProduct) {
      res.status(404).json({ message: 'No trip with this id!' });
      return;
    }
    res.status(200).json({ message: `Removed ${deleteProduct} from the database.` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
