$("#btn").click(function() {
    $("#code").val(generateCode($("#number").val()))
    $("#alert").parent().removeClass('d-none')
})

function generateCode(length) {
    let result           = '';
    let characters       = 'ABCDEF0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters
            .charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}