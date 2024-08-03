fn main(pan: Field, expiryDate: Field, cvv: Field, bankKey: pub Field) {
    let computed_cvv = pan + expiryDate + bankKey;
    assert(computed_cvv == cvv);
}

#[test]
fn test_main() {
    main(1, 2, 7, 4);

    // Uncomment to make test fail
    // main(1, 1);
}
