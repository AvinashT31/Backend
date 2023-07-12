import axios from "axios"

export const getallproduct = async (req, res) => {
    try {
        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        //     .then(json => res.send(json))

        const result = await axios("https://fakestoreapi.com/products")
        // console.log(result.data);
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
}

export const Getsingleproduct = async (req, res) => {
    try {
        // fetch("https://fakestoreapi.com/products/15")
        // .then(res => res.json())
        // .then(json => res.send(json));

        const result = await axios("https://fakestoreapi.com/products/9")
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

export const Addnewproduct = async (req, res) => {
    try {
        const { title, price, description, image, category } = req.body

        if (!title) return res.send("title is required")
        if (!price) return res.send("price is required")
        if (!description) return res.send("description is required")
        if (!image) return res.send("image is required")
        if (!category) return res.send("cstegory is required")

        // fetch('https://fakestoreapi.com/products', {
        //     method: "POST",
        //     body: JSON.stringify(
        //         {
        //             title: title,
        //             price: price,
        //             description: description,
        //             image: image,
        //             category: category
        //         }
        //     )
        // })
        //     .then(res => res.json())
        //     .then(json => res.send(json))


        const result = await axios('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

export const Updateproduct = (req, res) => {
    try {
        const { title, price, description, image, category } = req.body

        if (!title) return res.send("title is required")
        if (!price) return res.send("price is required")
        if (!description) return res.send("description is required")
        if (!image) return res.send("image is required");
        if (!category) return res.send("category is required")


        fetch("https://fakestoreapi.com/products/7", {
            method: "PATCH",
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                image: image,
                category: category
            })
        })

            .then(res => res.json())
            .then(json => res.send(json))
    } catch (error) {
        res.send(error)
    }
}

export const Deleteproduct = (req, res) => {
    try {

    } catch (error) {
        res.send(error)
    }
}