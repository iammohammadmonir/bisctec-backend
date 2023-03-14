import path from 'path';
import { StatusCodes } from 'http-status-codes';

const uploadImage = async (req, res) => {
  let orderImage = req.files.image;
  const __dirname = path.resolve();
  const imagePath = path.join(__dirname, './uploads/' + `${orderImage.name}`);
  await orderImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${orderImage.name}` } });
};

export default uploadImage;
