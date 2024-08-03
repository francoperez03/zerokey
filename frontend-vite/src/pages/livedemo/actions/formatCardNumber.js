export const  formatCardNumber = (event) => {
    const input = event.target;
    let value = input.value.replace(/\s+/g, ''); // Elimina espacios existentes
    if (value.length > 16) {
        value = value.slice(0, 16); // Limita a 16 dígitos
    }
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim(); // Formatea en grupos de 4 dígitos
    input.value = formattedValue;
}
