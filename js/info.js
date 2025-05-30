// js/info.js
export const info = {
  "digital-commerce": {
    title: "Digital Commerce",
    modules: [
      {
        id: "catalog",
        title: "Catalog",
        body: `Catalog is the Intershop module where merchants configure their products to make them available in the store.
It defines the category tree, brands, SKUs, and specifications.` :contentReference[oaicite:1]{index=1}
      },
      {
        id: "pricing",
        title: "Pricing",
        body: `Pricing is the Intershop module for creating, editing, and storing price details for your SKUs.
Supports multiple pricing strategies, customer groups, and external integrations.` :contentReference[oaicite:3]{index=3}
      },
      {
        id: "promotions",
        title: "Promotions",
        body: `Promotions lets you build discounts, coupons, bundles, and tax rules applied to shopping carts.` :contentReference[oaicite:5]{index=5}
      },
      {
        id: "checkout",
        title: "Checkout",
        body: `Checkout coordinates Catalog, Pricing, Promotions, Logistics and Payments to complete purchases,
with customization for shipping, geolocation, and abandoned-cart workflows.` :contentReference[oaicite:7]{index=7}
      },
      {
        id: "paymentGateway",
        title: "Payment Gateway",
        body: `Manages payment providers and transaction settings. Supports wallets, gift cards, anti-fraud, and credit lines.` :contentReference[oaicite:9]{index=9}
      },
      {
        id: "channelManagement",
        title: "Channel Management",
        body: `Integrates web, POS, mobile, and marketplace channels so orders and data are unified across touchpoints.` :contentReference[oaicite:11]{index=11}
      }
    ]
  },
  "b2b-commerce": {
    title: "B2B Commerce",
    modules: [
      {
        id: "b2bOrganizations",
        title: "B2B Organizations",
        body: `Group B2B buyers into organizations with custom catalogs, prices, and payment methods.` :contentReference[oaicite:13]{index=13}
      },
      {
        id: "b2bQuotes",
        title: "B2B Quotes & Carts",
        body: `Save and share carts as quotes—ideal for negotiation and internal approvals within an organization.` :contentReference[oaicite:15]{index=15}
      },
      {
        id: "quickOrder",
        title: "Quick Order",
        body: `A bulk-ordering page with spreadsheet uploads for fast B2B purchasing.` :contentReference[oaicite:17]{index=17}
      },
      {
        id: "b2bCheckout",
        title: "B2B Checkout",
        body: `Custom checkout flows for B2B, including approvals, terms, and multiple shipping addresses.` :contentReference[oaicite:19]{index=19}
      },
      {
        id: "costCenters",
        title: "Cost Centers",
        body: `Define departments or units within organizations for budgeting and shipping management.` :contentReference[oaicite:21]{index=21}
      },
      {
        id: "rolesPermissions",
        title: "Roles & Permissions",
        body: `Assign buyer, approver, or manager roles with fine-grained access controls.` :contentReference[oaicite:23]{index=23}
      }
    ]
  },

  /* Placeholder: Fill in the remaining categories similarly:
     - "experience-management"
     - "distributed-order-management"
     - "marketplace-management"
     - "admin"
     - "developer-tooling"
  */
};
