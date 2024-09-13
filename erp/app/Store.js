import { create } from 'zustand'

const useStore = create((set) => ({
    products: [],
    suppliers: [],
    user:null,

    setProductes: (products) => set({ products }),
    setSupplieres: (suppliers) => set({ suppliers }),
    updateProductStock: (productId, newStock) => set((state) => ({
        products: state.products.map((product) =>
            product.id === productId ? { ...product, stock: newStock } : product
        ),
    })),

    setUser: (user) => set({ user }),

    logout: () => set({ user: null }),
}));

export default useStore;
