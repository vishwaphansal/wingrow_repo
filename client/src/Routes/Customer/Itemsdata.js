const itemsData = [
    // Leaves
    { img : "https://tse1.mm.bing.net/th?id=OIP.oZvtCj53J53fwMppGeJOzQHaLI&pid=Api&P=0" ,  label: "Amaranthus" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.4VM2IGRnWpoXLeNqQcP7IgHaE6&pid=Api&P=0" ,  label: "Beet Root"},
    { img : "https://tse1.mm.bing.net/th?id=OIP.4N9f4-0PqxiFnwCpxxcnLwAAAA&pid=Api&P=0" ,  label: "Chukka- sorrel Leaves" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.z1Qm04yKPBjwI3SJIiVtHQHaE7&pid=Api&P=0" ,  label: "Colocasia Leaves" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.Um1MhltLED0GkQ6dkNyV6gHaE8&pid=Api&P=0" ,  label: "Curry Leaves" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.2TD_IPQSlPgIMueTeRA7KAHaE7&pid=Api&P=0" ,  label: "Dill" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.D9YVlgtOcTAvNUTVmr9SiwHaE7&pid=Api&P=0" ,  label: "Fenugreek Leaves"},
    { img : "https://tse3.mm.bing.net/th?id=OIP.tgQgXNp-jb4oof60X2RluAHaEd&pid=Api&P=0" ,  label: "Green Amaranth" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.7CSVUKpMtcDk9lLlrzZKYAHaEK&pid=Api&P=0" ,  label: "Spinach" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.EmbORmr2cqqtEPXGqJ5JwgHaHa&pid=Api&P=0" ,  label: "Spring Onion"},
    { img : "https://tse2.mm.bing.net/th?id=OIP.LWX_vhyz6-FC_DC9Z699_wHaFj&pid=Api&P=0" ,  label: "Sufflower" },
  // Wild-Antic
    { img : "https://tse3.mm.bing.net/th?id=OIP.59kmMRTNDAayptrclOz6mAHaHa&pid=Api&P=0" ,  label: "Chilli" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.K8TV4D8wLzuMvJFhoE2V2AHaFj&pid=Api&P=0" ,  label: "Cucumber Madras" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.5j_Gqx9MfsMLy2aONNCXpAHaGL&pid=Api&P=0" ,  label: "Kohlrabi" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.K_m_mfk2gFjc7CC6oc4zSQHaHa&pid=Api&P=0" ,  label: "Onion White-Pandhara Kanda" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.jsUEbpsFuy24Gvg8iZbQegHaE7&pid=Api&P=0" ,  label: "Pointed Gourd" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.SaOncstCU7-tSaFGYN_PTgHaE8&pid=Api&P=0" ,  label: "Pumpkin" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.NbnvhctzZTKzo2lk6zCj5QHaFW&pid=Api&P=0" ,  label: "Raw Jackfruit" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.UwMJGbmXSxczu8ggXqpx7QHaHa&pid=Api&P=0" ,  label: "Raw Papaya" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.T8n-8esLh0qdGJELKgizFwAAAA&pid=Api&P=0" ,  label: "Sambhar Kanda" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.F2Srddb_88mWo3Y1h4TviQHaHa&pid=Api&P=0" ,  label: "Snake Gourd"  },
    { img : "https://tse1.mm.bing.net/th?id=OIP.T8hEwoW_Givq-R9s0B7WLgHaEr&pid=Api&P=0" ,  label: "Spiny Gourd" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.tTs6QFjpDzEqgTENZNHwlwHaFj&pid=Api&P=0" ,  label: "Sweet Potato" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.GYS1O2-74pZcBh1wF3T3oAHaEc&pid=Api&P=0" ,  label: "Yam" },
  // Exotic
    { img : "https://tse4.mm.bing.net/th?id=OIP.DsQILGekLfKEBe72M70uOQHaE8&pid=Api&P=0" ,  label: "Asparagus" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.ZpMv8SlV7xNu-qx-QR5iIAHaDt&pid=Api&P=0" ,  label: "Avocado" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.2Sdk7NGwZhy8FHkUhPbP5gHaHa&pid=Api&P=0" ,  label: "Baby Corn" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.YrqMRFoES7aKGWCwmkwMSQHaE8&pid=Api&P=0" ,  label: "Baby Potato" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.wNg1bLSyL5DrIpkgGZW07QHaE8&pid=Api&P=0" ,  label: "Basil" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.XgZftBj8LZb0ZHQo0ct-bwHaE7&pid=Api&P=0" ,  label: "Broccoli" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.ZFaBo7shTaDOcUv9B44hKgHaE8&pid=Api&P=0" ,  label: "Celery" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.XG92MZjHFyoZBPA8Ie-AGQHaFE&pid=Api&P=0" ,  label: "Cherry Tomato" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.OiNazNxLevqimgb6x1qy9gHaHa&pid=Api&P=0" ,  label: "chinese Cabbage" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.cfzai8HmlzfzvewNQu6JPwHaE7&pid=Api&P=0" ,  label: "Coccinia" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.ouy2QSIKWkpN1IfTo7S2bgHaHa&pid=Api&P=0" ,  label: "Green Zucchini" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.ZvrZQ0C4lyKnIf5QofH0RAHaE5&pid=Api&P=0" ,  label: "Iceberg Lettuce" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.DbmAUpb4ihELAe0L8ir5lgHaFj&pid=Api&P=0" ,  label: "Parsley" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.dUNFmFAa-CzZGhSvEuYj5AHaE8&pid=Api&P=0" ,  label: "Red Cabbage" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.DjwkEwSJ4avB6hic8dl8vgHaE8&pid=Api&P=0" ,  label: "Red Capsicum" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.GKnhTCLXyEtuxoJROdR3wAHaD4&pid=Api&P=0" ,  label: "Romaine Lettuce" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.6gqfCh6CB2a0yk7H-Nn5SgHaHa&pid=Api&P=0" ,  label: "Yellow Capsicum" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.zWllMCqUbgctLreQNn8IoQHaGb&pid=Api&P=0" ,  label: "Yellow Zucchini" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.We_sI87oaQlXf0TxF1DXgAHaE8&pid=Api&P=0" ,  label: "Mushroom" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.ewzXlPRBaTjHez9nG75LvgHaE9&pid=Api&P=0" ,  label: "Sweet Corn" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.tLx5s3FAceQZF2CY-j72xgHaHa&pid=Api&P=0" ,  label: "Sweet Corn Grains" },
  // Special stall
    { img : "https://tse2.mm.bing.net/th?id=OIP.7KD91jESje_cKvNssYyIwgHaHa&pid=Api&P=0" ,  label: "Cabbage" },
    { img : "https://tse2.explicit.bing.net/th?id=OIP.34rl63HfcgB2Y0hHfvgCbAHaFj&pid=Api&P=0" ,  label: "Potato (Agra)" },
    { img : "https://tse1.explicit.bing.net/th?id=OIP.NneUF0PtbcPM0YwoG309OQAAAA&pid=Api&P=0" ,  label: "Potato (Indore)" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.PIfg_WKeqytn9GGiF4YfogHaHa&pid=Api&P=0" ,  label: "Potato (Talegav)" },
    // Fruit Vegetables
    { img : "https://tse1.mm.bing.net/th?id=OIP.UySg4jXgKSu8F_L3lCKGdwHaHa&pid=Api&P=0" ,  label: "Beans Double" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.GdvC1wFecwuXDfBQ9umQngHaE5&pid=Api&P=0" ,  label: "Bitter Gourd" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.cuDmkHH9HbBqdeuTF1JEoAHaHZ&pid=Api&P=0" ,  label: "Brinjal Big" },
    { img : "https://tse4.explicit.bing.net/th?id=OIP.xDUdcWY2Zdk7Si9DvBOZZgHaHa&pid=Api&P=0" ,  label: "Brinjal Green" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.buD0_06ys1yTVAudicmV8QHaHa&pid=Api&P=0" ,  label: "Brinjal Long Green" },
    { img : "https://tse3.mm.bing.net/th?id=OIP._DnlAeniik9DMghk03n_yAHaHa&pid=Api&P=0" ,  label: "Brinjal Purple" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.NQoblU6aVDk4w-pjm_mqRgHaGD&pid=Api&P=0" ,  label: "Carrot" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.YQnks-gzn4l96VT3fI3EqwHaFj&pid=Api&P=0" ,  label: "Cauliflower" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.SieVpKHiIhUmYJhFt2gOLwHaFu&pid=Api&P=0" ,  label: "Chavali Beans" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.razlNd3lBI-VGENGSRsTtQHaGl&pid=Api&P=0" ,  label: "Chickpeas - Chana sprouts" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.UwYvmEa_VNd3KP0j995xKAHaFZ&pid=Api&P=0" ,  label: "chilli - Bhavgagari Mirchi" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.eYGl9bsztxNzxo1sTjsIygHaG2&pid=Api&P=0" ,  label: "Chilli Green" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.s5Eeqsw1UMT6Y9ljUiH_KAHaHa&pid=Api&P=0" ,  label: "chilli Simple" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.2jxi-lp2wuC05udCR5RH1gHaF8&pid=Api&P=0" ,  label: "Cluster Beans" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.Mzx1Db4LGMwONXvNMmxTlwHaFj&pid=Api&P=0" ,  label: "Coconut" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.jd9I-rTs_1jEbU3zg0oNRwHaFj&pid=Api&P=0" ,  label: "Colocasia Roots" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.ux1GWI_FIwefwRGhSIZ-XAHaHa&pid=Api&P=0" ,  label: "Coriander" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.27pL_jB97ukFwjLjSpa-3wHaGS&pid=Api&P=0" ,  label: "Cucumber" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.K8TV4D8wLzuMvJFhoE2V2AHaFj&pid=Api&P=0" ,  label: "Cucumder Madras" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.qR4BomESHYQ3iBECPPbnAwAAAA&pid=Api&P=0" ,  label: "Cucumber Madras- Sambar Kakadi" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.EWWiKvpUCTfuqWx5bVmQAgHaHa&pid=Api&P=0" ,  label: "Cucumber Polyhouse- English Kakadi" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.L1Lpyx2tPYwVdZFwoE2S-gHaHV&pid=Api&P=0" ,  label: "Drum Sticks" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.joM-spxSBL3aKzqF3b1xzgHaFj&pid=Api&P=0" ,  label: "Field Beans" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.6v2Eb9zjTqInpYbTcjYmmAHaE6&pid=Api&P=0" ,  label: "Fresh Peeled Green Peas" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.t0XmsK9aekofoY9ZlBsF0gHaFM&pid=Api&P=0" ,  label: "Garlic" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.C6_FiolsBcCWCNH6sah-1wHaFj&pid=Api&P=0" ,  label: "Ginger" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.JQuW3c_cI51jRCjugGPydgHaFj&pid=Api&P=0" ,  label: "Green Capsicum" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.OMMcSJYB6DsmuCpDI98LPwHaF5&pid=Api&P=0" ,  label: "Green Mango" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.w4mkhfIwlOKN_2WgMheq6AHaHa&pid=Api&P=0" ,  label: "Green Peas" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.2Hl7fRk6SfNVyzIBJ_ugwgAAAA&pid=Api&P=0" ,  label: "Groundnut Pods" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.oadIkMovg-CaFbC9dOISCQHaE8&pid=Api&P=0" ,  label: "Tamarind" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.DY_Tlh9b1_7_QFCaTP2srgHaFj&pid=Api&P=0" ,  label: "Lady Finger" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.Slw-UZwtk8bD5fR8pVExkQHaE9&pid=Api&P=0" ,  label: "Lemon Grass" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.vx4obj_fyX8K1FXmnZ6RDQHaE7&pid=Api&P=0" ,  label: "Mint" },
    { img : "https://tse2.explicit.bing.net/th?id=OIP.F1abbo3je1ITdRYhhSgbcgHaE9&pid=Api&P=0" ,  label: "Onion" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.U-TrLODH8IAjeVbjcw9JSgHaFj&pid=Api&P=0" ,  label: "Onion Sambhar" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.YEgu4aXj4RE-GGXVMVsb_AHaE8&pid=Api&P=0" ,  label: "Lima Beans" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.2jz6AQVlMF2QqGyzNIZ_WgHaFk&pid=Api&P=0" ,  label: "Peeled Garlic" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.DHOFkvQUeiNgHShZ1aIxkgHaFj&pid=Api&P=0" ,  label: "Potato" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.B6zKp_syaez8maOKmuaRSgHaFj&pid=Api&P=0" ,  label: "Radish" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.FrP02D6ruyNfbj_zZ4rU9wHaHa&pid=Api&P=0" ,  label: "Ridgegourd" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.bkxh4iKB5ToZPB1a9KNqYQHaFy&pid=Api&P=0" ,  label: "Sponge Gourd" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.-ANLyiITUr6ZLbVaVIo_awHaH0&pid=Api&P=0" ,  label: "Tomato" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.uEg1EVl8uHqoj6OqUMOK8QHaE8&pid=Api&P=0" ,  label: "Wal" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.uEg1EVl8uHqoj6OqUMOK8QHaE8&pid=Api&P=0" ,  label: "Wal Broad" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.uEg1EVl8uHqoj6OqUMOK8QHaE8&pid=Api&P=0" ,  label: "Wal surati" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.-tX1EsuC7JgpJvjFkoAclAHaE8&pid=Api&P=0" ,  label: "Water Chestnuts" },
    // Fruit Export
    { img : "https://tse1.mm.bing.net/th?id=OIP.cdw0ZHI1qPJMickmTryOPgHaFj&pid=Api&P=0" ,  label: "Apple Fuji" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.AqhoalGORjTCq5jWJasGUAHaHJ&pid=Api&P=0" ,  label: "Apple Green" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.5R6VttyB5EXQP5v4Kpf5EQHaFy&pid=Api&P=0" ,  label: "Apple Kinnaur" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.N11vlrc1mGw4HNhFZp9zWAHaFv&pid=Api&P=0" ,  label: "Apple Red Delicious" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.vSLLxE1cZb__jcsnfHCWywHaHa&pid=Api&P=0" ,  label: "Apple Shimla Big" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.3iMfRqIvkFytRFNtvnwLqgHaFL&pid=Api&P=0" ,  label: "Kiwi" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.BlQTfbebQkoIQeqrHPBLeQHaHa&pid=Api&P=0" ,  label: "Litchi" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.Ou1FcbY36qU0GzLgpQhQvgHaHa&pid=Api&P=0" ,  label: "Strawberry" },
    // Fruit Summer
    { img : "https://tse3.mm.bing.net/th?id=OIP.5V6NbhstB58xYWut_rF6nQHaIV&pid=Api&P=0" ,  label: "Grapes Black" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.q6QP4tlaO7oUPIFgJopmCgHaFc&pid=Api&P=0" ,  label: "Grapes Green" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.bfstK-zJ1Q23g9V4pBgd9QHaFj&pid=Api&P=0" ,  label: "Jambhul" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.5OYHVVF1VjL8szcQAuFLgAHaFP&pid=Api&P=0" ,  label: "Mango Badami (For Juice)" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.vd_23LGNyWPmI3qR1VjuYwHaE0&pid=Api&P=0" ,  label: "Mango Devgad Hapus" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.Mbwswz7yPLeuyuF_DmbVrQHaHa&pid=Api&P=0" ,  label: "Mango Keshar" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.cPar4VklxIz47_Xky8Yd2wHaHa&pid=Api&P=0" ,  label: "Mango Lalbag" },
    { img : "https://tse1.mm.bing.net/th?id=OIP._tsvCLBtHSUPEWVTNXK0MwAAAA&pid=Api&P=0" ,  label: "Mango Payri" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.CcACBRtmMz36JNwzxAeZAAHaE8&pid=Api&P=0" ,  label: "Mango Ratnagiri Hapus" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.Xpg7sbqoXbrWRhFtPisytwHaGd&pid=Api&P=0" ,  label: "Mango Totapuri" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.24PBjNLerhf4pA2jaiTFsQHaF2&pid=Api&P=0" ,  label: "Muskmelon" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.Kg6XMmwsia_siNY7uRI8_QAAAA&pid=Api&P=0" ,  label: "Watermelon Kiran" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.TTf0GiyBWd19ke6T0U5xdQHaHa&pid=Api&P=0" ,  label: "Watermelon Regular" },
    // Fruit
    { img : "https://tse1.mm.bing.net/th?id=OIP.nCFGLg7E2SIC681VxZOEPgHaIV&pid=Api&P=0" ,  label: "Amla" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.GnzodwdqwRUJOPC56g0GIwHaHa&pid=Api&P=0" ,  label: "Apple Gourd" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.1zesb-XE_dEm4vKPJBbaSQHaFj&pid=Api&P=0" ,  label: "Ashgourd" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.w3enrFiy_oQIZp_nkxZCvwHaGS&pid=Api&P=0" ,  label: "Banana" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.DBnxUaXfn5gPwuDIUv5h9AHaHa&pid=Api&P=0" ,  label: "Custard-apple" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.JkopS92vcinCHFg7H36YjwAAAA&pid=Api&P=0" ,  label: "Elaichi Banana" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.GHeCpugr8N88IBSUGn-8SgHaHa&pid=Api&P=0" ,  label: "Figs" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.A5BARyy_eJphJMCOImGMTwHaE1&pid=Api&P=0" ,  label: "  " },
    { img : "https://tse4.mm.bing.net/th?id=OIP.jd5rnUw-ZlrjEI9olVpLyQHaE7&pid=Api&P=0" ,  label: "Jackfruit Peeled" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.A9-t34E17rk5GP6AwAvnFQAAAA&pid=Api&P=0" ,  label: "Jujube - Ber" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.1-lWitrjiVb4XjtuhcT55wHaE7&pid=Api&P=0" ,  label: "Orange Small" },
    { img : "https://tse2.mm.bing.net/th?id=OIP.-MYj5l87IsNORGSxKQA1pQHaHa&pid=Api&P=0" ,  label: "Orange Kinnow" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.mFAwThy5cmxHR2uURiXhbwHaF8&pid=Api&P=0" ,  label: "Papaya" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.TpxjJyGd5Z1eCcA6ZqYHsAHaHa&pid=Api&P=0" ,  label: "Pear Imported" },
    { img : "https://tse3.mm.bing.net/th?id=OIP.3vkQ8g3CPjbqyO9LFvVwbAHaGp&pid=Api&P=0" ,  label: "Pomogranate" },
    { img : "https://tse1.explicit.bing.net/th?id=OIP.ZfIvBhl_LW5i5UkeAeyeaAHaFv&pid=Api&P=0" ,  label: "Raw Banana" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.sOKAaw01N7u0QsI268973gHaFj&pid=Api&P=0" ,  label: "Sapodilla" },
    { img : "https://tse1.mm.bing.net/th?id=OIP.E3PyRSkTjZRTYfgf_LTO6wHaFU&pid=Api&P=0" ,  label: "Sugarcane" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.5ogNSpT3ZT54KZyryQXUqQHaHa&pid=Api&P=0" ,  label: "Sweet Lime" },
    { img : "https://tse4.mm.bing.net/th?id=OIP.unSRTZo185ll-8GHg8Q7_AHaFj&pid=Api&P=0" ,  label: "Tender coconut" },
  ];


  const snacks = [
    {
    "snacksName": "Nachani Chips",
    "snacksPrice": 59,
    "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
    "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
    },
    {
      "snacksName": "Nachani Chips",
      "snacksPrice": 59,
      "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
      "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
      },
      {
        "snacksName": "Nachani Chips",
        "snacksPrice": 59,
        "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
        "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
        },
        {
          "snacksName": "Nachani Chips",
          "snacksPrice": 59,
          "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
          "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
          },
          {
            "snacksName": "Nachani Chips",
            "snacksPrice": 59,
            "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
            "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
            },
            {
              "snacksName": "Nachani Chips",
              "snacksPrice": 59,
              "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
              "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
              },
              {
                "snacksName": "Nachani Chips",
                "snacksPrice": 59,
                "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                },
                {
                  "snacksName": "Nachani Chips",
                  "snacksPrice": 59,
                  "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                  "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                  },
                  {
                    "snacksName": "Nachani Chips",
                    "snacksPrice": 59,
                    "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                    "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                    },
                    {
                      "snacksName": "Nachani Chips",
                      "snacksPrice": 59,
                      "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                      "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                      },
                      {
                        "snacksName": "Nachani Chips",
                        "snacksPrice": 59,
                        "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                        "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                        },
                        {
                          "snacksName": "Nachani Chips",
                          "snacksPrice": 59,
                          "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                          "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                          },
                          {
                            "snacksName": "Nachani Chips",
                            "snacksPrice": 59,
                            "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                            "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                            },
                            {
                              "snacksName": "Nachani Chips",
                              "snacksPrice": 59,
                              "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                              "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                              },
                              {
                                "snacksName": "Nachani Chips",
                                "snacksPrice": 59,
                                "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                },
                                {
                                  "snacksName": "Nachani Chips",
                                  "snacksPrice": 59,
                                  "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                  "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                  },
                                  {
                                    "snacksName": "Nachani Chips",
                                    "snacksPrice": 59,
                                    "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                    "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                    },
                                    {
                                      "snacksName": "Nachani Chips",
                                      "snacksPrice": 59,
                                      "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                      "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                      },
                                      {
                                        "snacksName": "Nachani Chips",
                                        "snacksPrice": 59,
                                        "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                        "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                        },
                                        {
                                          "snacksName": "Nachani Chips",
                                          "snacksPrice": 59,
                                          "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                          "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                          },
                                          {
                                            "snacksName": "Nachani Chips",
                                            "snacksPrice": 59,
                                            "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                            "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                            },
                                            {
                                              "snacksName": "Nachani Chips",
                                              "snacksPrice": 59,
                                              "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                              "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                              },
                                              {
                                                "snacksName": "Nachani Chips",
                                                "snacksPrice": 59,
                                                "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                },
                                                {
                                                  "snacksName": "Nachani Chips",
                                                  "snacksPrice": 59,
                                                  "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                  "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                  },
                                                  {
                                                    "snacksName": "Nachani Chips",
                                                    "snacksPrice": 59,
                                                    "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                    "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                    },
                                                    {
                                                      "snacksName": "Nachani Chips",
                                                      "snacksPrice": 59,
                                                      "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                      "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                      },
                                                      {
                                                        "snacksName": "Nachani Chips",
                                                        "snacksPrice": 59,
                                                        "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                        "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                        },
                                                        {
                                                          "snacksName": "Nachani Chips",
                                                          "snacksPrice": 59,
                                                          "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                          "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                          },
                                                          {
                                                            "snacksName": "Nachani Chips",
                                                            "snacksPrice": 59,
                                                            "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                            "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                            },
                                                            {
                                                              "snacksName": "Nachani Chips",
                                                              "snacksPrice": 59,
                                                              "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                              "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                              },
                                                              {
                                                                "snacksName": "Nachani Chips",
                                                                "snacksPrice": 59,
                                                                "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                                "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                                },
                                                                {
                                                                  "snacksName": "Nachani Chips",
                                                                  "snacksPrice": 59,
                                                                  "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                                  "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                                  },
                                                                  {
                                                                    "snacksName": "Nachani Chips",
                                                                    "snacksPrice": 59,
                                                                    "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                                    "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                                    },
                                                                    {
                                                                      "snacksName": "Nachani Chips",
                                                                      "snacksPrice": 59,
                                                                      "snacksIngredients" : "Nachani , Urad dal , Moong dal , Salt , Chilli Powder , Soya oil",
                                                                      "snakcsImage":"https://tse2.mm.bing.net/th?id=OIP.vspW6eVR7QOIDH9mC-KOQAHaE8&pid=Api&P=0"
                                                                      }
  ]

  export {itemsData , snacks}