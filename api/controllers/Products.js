const ProductsServices = require("../services/Products");

class ProductsController {
  static async newProduct(req, res) {
    const { error, response } = await ProductsServices.newProduct(req.body);

    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }

  static async getProducts(req, res) {
    const { page } = req.query || 1;
    const { error, response } = await ProductsServices.getProducts(
      page,
      req.body
    );

    if (error) return res.status(400).send(response);
    return res.send(response);
  }

  static async getProductsByCategory(req, res) {
    const { page, category } = req.query || 1;
    const { error, response } = await ProductsServices.getProducts(
      page,
      { category },
      
    );

    if (error) return res.status(400).send(response);
    return res.send(response);
  }

  static async getProduct(req, res) {
    const { id } = req.params;
    const { error, response } = await ProductsServices.getProduct(id);

    if (error) return res.status(400).send(response);
    return res.send(response);
  }

  static async searchByTitle(req, res) {
    const { page } = req.query || 1
    const { title } = req.params
    const { error, response } = await ProductsServices.searchByTitle(page, title)

    if (error) return res.status(400).send(response);
    return res.send(response);
  }

  static async updateProduct(req, res) {
    const { id } = req.params;
    const { error, response } = await ProductsServices.updateProduct(
      id,
      req.body
    );

    if (error) return res.status(400).send(response);
    return res.send(response);
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    const { error, response } = await ProductsServices.deleteProduct(id);

    if (error) return res.status(400).send(response);
    return res.sendStatus(202);
  }

  static async reviewProduct(req, res) {
    const {id} = req.params
    const { error, response } = await ProductsServices.reviewProduct(id, req.body);

    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }

  static async searchByTags(req, res) {
    const { page, tags } = req.query;
    const { error, response } = await ProductsServices.searchByTags(page, tags);

    if (error) return res.status(400).send(response);
    return res.status(200).send(response);
  }
}

module.exports = ProductsController;
