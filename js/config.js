// js/config.js
import { icons }  from "./assets.js";
import { labels } from "./vars.js";

export const modules = [
  {
    id:        "paymentGateway",
    title:     labels.sidebars.left[0],
    icon:      icons.paymentGateway,
    providers: [
      { id: "none",   logo: icons.none },
      { id: "paypal", logo: icons.paypal },
      { id: "stripe", logo: icons.stripe },
      { id: "adyen",  logo: icons.adyen }
    ],
    enabled: true
  },
  {
    id:        "carriers",
    title:     labels.sidebars.left[1],
    icon:      icons.carriers,
    providers: [
      { id: "none",    logo: icons.none },
      { id: "dhl",     logo: icons.dhl },
      { id: "fedex",   logo: icons.fedex },
      { id: "easypost",logo: icons.easypost }
    ],
    enabled: true
  },
  // all the rest of your modules as simple toggles:
  { id: "catalog",            title: "Catalog",            icon: icons.catalog,            enabled: true },
  { id: "pricing",            title: "Pricing",            icon: icons.pricing,            enabled: true },
  { id: "checkout",           title: "Checkout",           icon: icons.checkout,           enabled: true },
  { id: "promotions",         title: "Promotions",         icon: icons.promotions,         enabled: true },
  { id: "channelManagement",  title: "Channel Management", icon: icons.channelManagement,  enabled: true },
  { id: "b2bOrganizations",   title: "B2B Organizations",  icon: icons.b2bOrganizations,   enabled: true },
  { id: "b2bQuotes",          title: "B2B Quotes & Carts", icon: icons.b2bQuotes,          enabled: true },
  { id: "b2bCheckout",        title: "B2B Checkout",       icon: icons.b2bCheckout,        enabled: true },
  { id: "costCenters",        title: "Cost Centers",       icon: icons.costCenters,        enabled: true },
  { id: "quickOrder",         title: "Quick Order",        icon: icons.quickOrder,         enabled: true },
  { id: "rolesPermissions",   title: "Roles & Permissions",icon: icons.rolesPermissions,   enabled: true },
  { id: "headlessCMS",        title: "Headless CMS",       icon: icons.headlessCMS,        enabled: true },
  { id: "intelligentSearch",  title: "Intelligent Search", icon: icons.intelligentSearch,  enabled: true },
  { id: "pwaApplication",     title: "PWA Application",    icon: icons.pwaApplication,     enabled: true },
  { id: "storefrontApp",      title: "Storefront App",     icon: icons.storefrontApp,      enabled: true },
  { id: "inventoryManagement",title: "Inventory Management",icon: icons.inventoryManagement,enabled: true },
  { id: "orderAllocation",    title: "Order Allocation",   icon: icons.orderAllocation,    enabled: true },
  { id: "deliveryPromise",    title: "Delivery Promise",   icon: icons.deliveryPromise,    enabled: true },
  { id: "logistics",          title: "Logistics",          icon: icons.logistics,          enabled: true },
  { id: "sellerManagement",   title: "Seller Management",  icon: icons.sellerManagement,   enabled: true },
  { id: "offerQuality",       title: "Offer Quality",      icon: icons.offerQuality,       enabled: true },
  { id: "marketplaceNetwork", title: "Marketplace Network",icon: icons.marketplaceNetwork, enabled: true },
  { id: "sellerPortal",       title: "Seller Portal",      icon: icons.sellerPortal,       enabled: true },
  { id: "dashboardAnalytics", title: "Dashboard & Analytics",icon: icons.dashboardAnalytics,enabled: true },
  { id: "releases",           title: "Releases",           icon: icons.releases,           enabled: true },
  { id: "userAccountMgmt",    title: "User & Account Mgmt.",icon: icons.userAccountMgmt,   enabled: true },
  { id: "extensionsHub",      title: "Extensions Hub",     icon: icons.extensionsHub,      enabled: true },
  { id: "storefrontPlatform", title: "Storefront Platform",icon: icons.storefrontPlatform,enabled: true },
  { id: "apis",               title: "APIs",               icon: icons.apis,               enabled: true },
  { id: "masterdataMgmt",     title: "Masterdata Mgmt.",    icon: icons.masterdataMgmt,     enabled: true },
  { id: "ioAppPlatform",      title: "VTEX IO App Platform",icon: icons.ioAppPlatform,     enabled: true },
  { id: "pickAndPack",        title: labels.sidebars.right[0], icon: icons.pickAndPack,        enabled: true },
  { id: "vtexDataPipeline",   title: labels.sidebars.right[1], icon: icons.vtexDataPipeline,   enabled: true },
  { id: "vtexShield",         title: labels.sidebars.right[2], icon: icons.vtexShield,         enabled: true },
  { id: "weni",               title: labels.sidebars.right[3], icon: icons.weni,               enabled: true },
  { id: "otherChannels",      title: labels.sidebars.right[4], icon: icons.otherChannels,      enabled: true }
];

export const layout = {
  left:    ["paymentGateway","carriers"],
  categories: [
    {
      id:      "digital-commerce",
      theme:   "core",
      modules: ["catalog","pricing","checkout","promotions","paymentGateway","channelManagement"]
    },
    {
      id:      "b2b-commerce",
      theme:   "core",
      modules: ["b2bOrganizations","b2bQuotes","b2bCheckout","costCenters","quickOrder","rolesPermissions"]
    },
    {
      id:      "experience-management",
      theme:   "core",
      modules: ["headlessCMS","intelligentSearch","pwaApplication","storefrontApp"]
    },
    {
      id:      "distributed-order-management",
      theme:   "core",
      modules: ["inventoryManagement","orderAllocation","deliveryPromise","logistics"]
    },
    {
      id:      "marketplace-management",
      theme:   "core",
      modules: ["sellerManagement","offerQuality","marketplaceNetwork","sellerPortal"]
    },
    {
      id:      "admin",
      theme:   "addon",
      modules: ["dashboardAnalytics","releases","userAccountMgmt","extensionsHub"]
    },
    {
      id:      "developer-tooling",
      theme:   "addon",
      modules: ["storefrontPlatform","apis","masterdataMgmt","ioAppPlatform"]
    }
  ],
  right: ["pickAndPack","vtexDataPipeline","vtexShield","weni","otherChannels"]
};
