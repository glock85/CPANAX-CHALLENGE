import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MediaCard from "../components/ProductCard";
import { api } from "../services";

const FirstChallenge = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false);
  const [gridSystem, setGridSystem] = useState(3);

  const getProducts = async () => {
    const data = await api.products.getProducts();
    setProducts(data.products);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = async (product) => {
    setOpen(true);

    const response = await api.products.getProduct(product);
    setProduct(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
        }}
      >
        <h1 className="titleChallenge">First Challenge</h1>
        <TextField
          id="standard-basic"
          label="Numero de columnas"
          variant="standard"
          onChange={(e) => setGridSystem(e.target.value)}
          value={gridSystem}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSystem}, 1fr)`,
          gridGap: 20,
          p: 2,
        }}
      >
        {products.map((product) => (
          <div key={product.id} onClick={() => handleModal(product.id)}>
            <MediaCard
              title={product.title}
              brand={product.brand}
              image={product.thumbnail}
            />
          </div>
        ))}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <ImageList
            sx={{
              width: 600,
              backgroundColor: "#f5f5f5",
              margin: "auto",
              p: 2,
              overflow: "hidden",
            }}
            cols={3}
            rowHeight={200}
            gap={8}
          >
            {product?.images?.map((pm, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${pm}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${pm}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={pm}
                  loading="lazy"
                  style={{ borderRadius: 10 }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Modal>
    </Box>
  );
};

export default FirstChallenge;
