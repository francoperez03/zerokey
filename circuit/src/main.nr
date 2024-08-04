fn main(pan: Field, expiryDate: Field, cvv: Field, bankKey: Field, ttl: pub Field) {
    let computed_cvv = pan + expiryDate + bankKey;

    assert(computed_cvv == cvv);
    assert(ttl == ttl);
}

#[test]
fn test_main() {
    main(1, 2, 7, 4, 12345);

    // Uncomment to make test fail
    // main(1, 1);
}
