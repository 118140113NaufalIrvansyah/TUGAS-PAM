const Mundurpos = () => {
    return {
        type : "Mundur"
    }
}

const Majupos = () => {
    return {
        type : "Maju"
    }
}

test("Test Action Mundur " , () => {
    expect(Mundurpos().type).toBe("Mundur")
})

test("Test Action Maju " , () => {
    expect(Majupos().type).toBe("Maju")
})