import flowers from "../data/flower.json" with { type: "json" };

let flowerData = [...flowers];

export const getFlowers = (req, res) => {
    res.status(200).json(flowerData);
};

export const getFlowerById = (req, res) => {
    const flower = flowerData.find(
        item => item.id == req.params.id
    );
    if (!flower) {
        return res.status(404).json({ message: "Flower not found" });
    }
    res.status(200).json(flower);
};

export const createFlower = (req, res) => {
    const newFlower = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    };

    flowerData.push(newFlower);
    res.status(201).json(newFlower);
};

export const updateFlower = (req, res) => {
    const flower = flowerData.find(
        item => item.id == req.params.id
    );
    if (flower) {
         flower.name = req.body.name || flower.name;
    flower.price = req.body.price || flower.price;
    res.status(200).json(flower);
    }
        else {
        res.status(404).json({ message: "Flower not found" });
    }
};

export const deleteFlower = (req, res) => {
    const flowerData = flowerData.filter(
        item => item.id == req.params.id
    );

    res.status(200).json({ message: "Flower deleted successfully" });
};
