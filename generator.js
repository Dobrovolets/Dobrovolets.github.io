$("#btn").click(function() {
    let timeout = 5000;
    $("#code").val(generateCode())
    $("#alert").text('You have ' + timeout / 1000 + ' seconds to copy it!')
    $("#alert").parent().removeClass('d-none')
    setTimeout(function () {
        $("#code").val('Generate a code')
        $("#alert").parent().addClass('d-none')
    }, timeout)
})

function generateCode() {
    let length = 64;
    let result           = '';
    let characters       = 'ABCDEF0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters
            .charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}