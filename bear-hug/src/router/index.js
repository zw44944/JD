import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("../views/home/home.vue"),
        redirect: "/index",
        children: [
            // 首页路由
            {
                path: "index",
                name: "index",
                meta: { sort: 1 },
                component: () =>
                    import ("../views/home/index.vue"),
            },
            // 困境空间
            {
                path: "space/:interspace",
                name: "Trouble-space",
                meta: { sort: 2 },
                component: () =>
                    import ("../views/Trouble-space/space.vue"),
                children: [{
                    path: "select",
                    name: "select",
                    component: () =>
                        import ("../views/Trouble-space/select-page.vue"),
                }, ],
            },
            // 困境匹配
            {
                path: "matching",
                name: "matching",
                meta: { sort: 5 },
                redirect: { name: "countDown" },
                component: () =>
                    import ("../views/Trouble-matching/matching.vue"),
                children: [{
                        path: "countDown",
                        name: "countDown",
                        component: () =>
                            import ("../views/Trouble-matching/countDown.vue"),
                    },
                    {
                        path: "success",
                        name: "success",
                        component: () =>
                            import ("../views/Trouble-matching/success.vue"),
                    },
                    {
                        path: "fail",
                        name: "fail",
                        component: () =>
                            import ("../views/Trouble-matching/fail.vue"),
                    },
                ],
            },
            // 困境树洞
            {
                path: "tree",
                name: "tree",
                meta: { sort: 3 },
                component: () =>
                    import ("../views/Trouble-tree/tree.vue"),
            },
            // 困境碎片
            {
                path: "debris",
                name: "debris",
                meta: { sort: 4 },
                redirect: { name: "your" },
                component: () =>
                    import ("../views/Trouble-debris/debris.vue"),
                children: [{
                        path: "your",
                        name: "your",
                        component: () =>
                            import ("../views/Trouble-debris/yourDilemma.vue"),
                    },
                    {
                        path: "issue",
                        name: "issue",
                        component: () =>
                            import ("../views/Trouble-debris/releaseDilemma.vue"),
                    },
                    {
                        path: "nothing",
                        name: "nothing",
                        component: () =>
                            import ("../views/Trouble-debris/nothing.vue"),
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        name: "404",
        component: () =>
            import ("../views/Others/cuowu.vue"),
    },
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
    mode: 'hash',
    scrollBehavior(to, form) {
        if (to.matched[1] && to.matched[1].name !== "Trouble-space") {
            return {
                x: 0,
                y: 0,
            };
        } else if (form.matched[1] && form.matched[1].name !== "Trouble-space") {
            return {
                x: 0,
                y: 0,
            };
        }
    },
});

export default router;