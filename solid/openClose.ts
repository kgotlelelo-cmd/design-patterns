interface Customer {
    giveDiscount(): number
}

class RegularCustomer implements Customer {
    giveDiscount(): number {
        return 10
    }
}


class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20
    }
}


class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}

 