import axios from 'axios';
import React, { useEffect, useState } from 'react';

function KangenKetanProducts() {
const[dataKetanProducts, setDataKetanProducts] = useState([]);

useEffect(() => {
    fetchKetanProducts();
}, []);
};
const fetchKetanProducts = async () => {