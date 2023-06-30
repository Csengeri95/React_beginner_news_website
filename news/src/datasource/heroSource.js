
const hero1 = require("../images/hero1.jpg");
const hero2 = require("../images/hero2.jpg");
const hero3 = require("../images/hero3.jpg");
const hero4 = require("../images/hero4.jpg");
const hero5 = require("../images/hero5.jpg");
const hero6 = require("../images/hero6.jpg");
const hero7 = require("../images/hero7.jpg");

const author1 = require("../images/kissIstvan.jpg");
const author2 = require("../images/nagyRebeka.jpg");
const author3 = require("../images/szaboKalman.jpg");
const author4 = require("../images/lengyelRoza.jpg");
const author5 = require("../images/aratoJozsef.jpg");
const author6 = require("../images/gyepesPiroska.jpg");
const author7 = require("../images/vargaIzabella.jpg");


export const hero = [
    {
        id: 1,
        cover: hero1,
        category: "political",
        title: "In blandit eleifend quam",
        slug: "in-blandit-eleifend-quam",
        author: "Kiss István",
        authorImage: author1,
        time: "2023-01-08",
        login: true,
        articleTitle: "Fusce pharetra fringilla purus sed congue !",
        articleText: "Aenean dapibus varius vestibulum. Suspendisse pellentesque leo id erat tempus elementum. Vestibulum ut neque in magna luctus vehicula. Donec lacinia lectus vel orci finibus, vitae varius risus fringilla. Etiam lobortis odio sapien, sed faucibus mi sodales id. Quisque est elit, gravida ac egestas nec, sagittis in odio. Cras fermentum tortor et nibh commodo, dignissim blandit libero ultricies. Aenean consequat hendrerit feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        articleSecondText: "Vestibulum commodo quam vitae turpis dapibus efficitur. In hac habitasse platea dictumst. Etiam mollis congue libero, vitae dapibus urna dapibus at. Sed id diam at sem tincidunt ornare. Maecenas vel enim quis magna rhoncus ultricies tempor ut mauris. Suspendisse potenti. Nullam nec massa condimentum, scelerisque nulla ac, faucibus dui. Nunc mollis ornare nisi eget vestibulum. Nam congue diam id sem vulputate, a varius erat volutpat."
    },
    {
        id: 2,
        cover: hero2,
        category: "cultural",
        title: "Aenean viverra nisi mauris, id bibendum lectus finibus quis",
        slug: "aenean-viverra-nisi-mauris-id-bibendum-lectus-finibus-quis",
        author: "Nagy Rebeka",
        authorImage: author2,
        time: "2023-01-01",
        login: true,
        articleTitle: "Nullam tempus mi id dignissim vestibulum",
        articleText: "Proin mattis rutrum erat, ut consequat nulla malesuada sit amet. Vivamus ultrices mauris in suscipit molestie. Nulla eget tellus felis. Nunc gravida, nisl ac luctus laoreet, nisl risus viverra lectus, vel malesuada lacus velit quis nisl. In gravida arcu eget magna posuere hendrerit. Curabitur vel ultricies ligula. Etiam faucibus nibh sit amet diam tempor cursus. In tincidunt eu erat et tempor. Aliquam semper ullamcorper tellus sed eleifend.",
        articleSecondText: "Vivamus non mi placerat, mattis sapien et, fermentum velit. Mauris vestibulum mauris a erat viverra tincidunt. Aliquam ac felis mi. Donec at erat nulla. Mauris mollis at turpis sed faucibus. Mauris hendrerit venenatis velit at semper. Nullam eget lorem sit amet velit ultricies hendrerit. Integer non turpis non arcu gravida rutrum ac at est. Nunc faucibus in tellus non tincidunt. Pellentesque iaculis pretium mauris, quis molestie ipsum finibus eleifend. Integer eget placerat justo. Vivamus condimentum sapien arcu, in accumsan quam tristique eu. Nam tempus non erat at convallis. Vivamus euismod, odio vitae laoreet ornare, tortor est interdum nunc, id varius diam odio bibendum purus."

    },
    {
        id: 3,
        cover: hero3,
        category: "cultural",
        title: "Donec pulvinar magna vel felis consequat accumsan",
        slug: "donec-pulvinar-magna-vel-felis-consequat-accumsan",
        author: "Szabó Kálmán",
        authorImage: author3,
        time: "2023-01-10",
        login: false,
        articleTitle: "Maecenas egestas tempor ex nec scelerisque",
        articleText: "Nunc ut dignissim massa, a dignissim nulla.",
        articleSecondText: "Sed commodo mauris id est egestas auctor. Cras et molestie mauris."

    },
    {
        id: 4,
        cover: hero4,
        category: "political",
        title: "Proin enim dui, porta eget diam in, laoreet pulvinar urna",
        slug: "proin-enim-dui-porta-eget-diam-in-laoreet-pulvinar-urna",
        author: "Lengyel Róza",
        authorImage: author4,
        time: "2023-01-10",
        login: false,
        articleTitle: "Donec iaculis cursus turpis a suscipit",
        articleText: "Vivamus faucibus ullamcorper dui, ut tempus ipsum pellentesque vel.",
        articleSecondText: "Suspendisse porta lorem sed lectus mattis, vitae faucibus neque suscipit. Quisque vehicula dui vel lacus egestas, quis accumsan turpis hendrerit."

    },



]

export const slide = [
    {
        id: 5,
        cover: hero5,
        category: "political",
        title: "Cras nec purus commodo, accumsan leo id, rhoncus dolor",
        slug: "cras-nec-purus-commodo-accumsan-leo-id-rhoncus-dolor",
        author: "Arató József",
        authorImage: author5,
        time: "2023-02-10",
        login: false,
        articleTitle: "Donec iaculis cursus turpis a suscipit",
        articleText: "Vivamus faucibus ullamcorper dui, ut tempus ipsum pellentesque vel.",
        articleSecondText: "Suspendisse porta lorem sed lectus mattis, vitae faucibus neque suscipit. Quisque vehicula dui vel lacus egestas, quis accumsan turpis hendrerit."

    },

    {
        id: 6,
        cover: hero6,
        category: "cultural",
        title: "Ut sit amet mollis nisi, id pellentesque mauris",
        slug: "ut-sit-amet-mollis-nisi-id-pellentesque-mauris",
        author: "Gyepes Piroska",
        authorImage: author6,
        time: "2023-01-22",
        login: false,
        articleTitle: "Donec iaculis cursus turpis a suscipit",
        articleText: "Vivamus faucibus ullamcorper dui, ut tempus ipsum pellentesque vel.",
        articleSecondText: "Suspendisse porta lorem sed lectus mattis, vitae faucibus neque suscipit. Quisque vehicula dui vel lacus egestas, quis accumsan turpis hendrerit."

    },

    {
        id: 7,
        cover: hero7,
        category: "political",
        title: "Morbi lobortis ex sit amet lectus dignissim convallis",
        slug: "morbi-lobortis-ex-sit-amet-lectus-dignissim-convallis",
        author: "Varga Izabella",
        authorImage: author7,
        time: "2023-01-30",
        login: false,
        articleTitle: "Donec iaculis cursus turpis a suscipit",
        articleText: "Vivamus faucibus ullamcorper dui, ut tempus ipsum pellentesque vel.",
        articleSecondText: "Suspendisse porta lorem sed lectus mattis, vitae faucibus neque suscipit. Quisque vehicula dui vel lacus egestas, quis accumsan turpis hendrerit."

    },

]


export const sideArticles = [
    {
        id: 8,
        cover: "",
        category: "political",
        title: "Pellentesque sem risus, finibus eget aliquam eu",
        slug: "pellentesque-sem-risus-finibus-eget-aliquam-eu",
        author: "Varga Izabella",
        authorImage: author7,
        time: "2023-01-24",
        login: true,
        articleTitle: "Pellentesque sem risus, finibus eget aliquam eu, luctus id arcu",
        articleText: "Nulla auctor nibh sit amet suscipit ornare.",
        articleSecondText: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tincidunt, augue tincidunt placerat posuere, massa tortor pellentesque sapien, nec ultricies sem orci quis ex. Curabitur a felis lacinia, efficitur quam id, molestie risus. Praesent eget pretium enim. Quisque accumsan, libero ut scelerisque venenatis, dolor arcu mattis eros, et ultricies risus quam in ante. Nullam eget laoreet ante. Fusce accumsan lobortis ex, vel viverra leo hendrerit in. Curabitur ante nisi, vulputate sit amet ornare tempor, consequat in ligula. Sed semper mauris urna, ac ullamcorper ex elementum quis. Maecenas pretium eleifend orci, eu dignissim justo elementum id. Morbi nibh magna, ullamcorper vitae nulla sit amet, commodo malesuada mauris. Cras fringilla nunc vel aliquet volutpat."

    },
    {
        id: 9,
        cover: "",
        category: "cultural",
        title: "Sed consequat in leo sollicitudin posuere",
        slug: "sed-consequat-in-leo-sollicitudin-posuere",
        author: "Szabó Kálmán",
        authorImage: author3,
        time: "2023-01-12",
        login: true,
        articleTitle: "Vivamus erat lectus, placerat vitae nunc aliquet, posuere tincidunt nisl",
        articleText: "Vestibulum dignissim pharetra purus, in fermentum tortor iaculis eget. Proin risus massa, egestas et neque iaculis, ullamcorper finibus sapien. Suspendisse commodo nunc in odio finibus, at semper metus porta. Ut blandit nisi id suscipit tempus. Vestibulum at arcu ut elit viverra finibus. Nunc porttitor ligula ante, vel accumsan massa dapibus eget. Nulla nec turpis neque. Vestibulum egestas mauris vitae neque placerat eleifend vehicula et elit. Nulla luctus ex in justo lacinia pretium. Cras a tortor tortor. Nam luctus aliquam dui, quis feugiat sem. Ut sapien sem, porttitor quis turpis a, malesuada interdum orci. Ut nec tellus sit amet sem elementum pellentesque id sit amet mauris.",
        articleSecondText: "Nullam consequat fringilla ex, at accumsan tortor pretium eu. Sed auctor risus sed purus lacinia gravida et vitae tortor. Proin sit amet augue ultrices, euismod lorem pretium, gravida arcu. Nullam non metus tristique, porta ipsum sit amet, venenatis nisl. Fusce nec ex vitae sem fringilla blandit. Praesent metus elit, pharetra congue dui et, scelerisque luctus dolor. Quisque a finibus libero, eu efficitur risus. Morbi facilisis malesuada purus ac convallis."

    },
    {
        id: 10,
        cover: "",
        category: "cultural",
        title: "Curabitur non dapibus odio dapibus odio ex sit amet velit",
        slug:"curabitur-non-dapibus-odio-dapibus-odio-ex-sit-amet-velit",
        author: "Lengyel Róza",
        authorImage: author4,
        time: "2023-01-19",
        login: false,
        articleTitle: "Integer nec tortor a arcu semper mattis",
        articleText: "Cras eget fringilla ipsum. Integer dictum magna sed pellentesque dignissim.",
        articleSecondText: "Nunc placerat ex sit amet velit finibus aliquam. Pellentesque placerat, est nec viverra sollicitudin, nunc libero vehicula sapien, ac porttitor lacus elit nec orci."

    }
]