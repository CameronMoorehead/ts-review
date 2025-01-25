interface MyUser {
    name: string;
    id: string;
    email?: string;
    phone?: string;
}

type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }


const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "record",
    id: "foo",
    email: "test@test.com"
}, {
    email: "testing@test.com"
}))

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<string, UserWithoutID> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [id]: other
        }
    }, {});
}

console.log(mapById([
    {
        email: "test",
        name: "oi",
        id: "test"
    },
    {
        id: "test2",
        name: "abc",
    }
]))