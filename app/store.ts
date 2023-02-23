import { map } from "nanostores"

const route = map({ path: "book/ch01-00-getting-started" })

export const changeRoute = (value: string) => {
	route.set({ path: value })
}

export default route
