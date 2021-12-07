

// we do not use var / let / const inside a class
class Bag{

    // 1. A class member cannot have the 'const' keyword.
    const NumOfPackets;

    // 2. readonly values do not have to be initialized.
    public readonly Company;
  
}

// 1. We can only declare consts outside the class:
const fName = 'john';

// 2. 'const' declarations must be initialized.
const lName;