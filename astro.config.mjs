// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';

import mermaid from 'astro-mermaid';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Victor Mono",
				cssVariable: "--sl-font",
			},
		],
	},
	integrations: [
		mermaid({
			theme: 'forest',
			autoTheme: true
		}),
		starlight({
			title: 'Denful',
			sidebar: [
				{
					label: 'Blog',
					autogenerate: { directory: 'blog' },
				},
				{
					label: 'Ecosystem',
					items: [
						{ label: 'Overview', slug: 'ecosystem/overview' },
						{ label: 'dnx (the new Nix runtime)', slug: 'ecosystem/dnx' },
						{ label: 'Why denful exist', slug: 'motivation' },
					],
				},
				{
					label: 'Aspect oriented Nix',
					items: [
						{ label: 'gen (foundations)', slug: 'ecosystem/gen' },
						{ label: 'flake-aspects', slug: 'ecosystem/flake-aspects' },
						{ label: 'den', slug: 'ecosystem/den' },
						{ label: 'flake-file', slug: 'ecosystem/flake-file' },
						{ label: 'import-tree', slug: 'ecosystem/import-tree' },
						{ label: 'dendrix', slug: 'ecosystem/dendrix' },
						{ label: 'checkmate', slug: 'ecosystem/checkmate' },
						{ label: 'with-inputs', slug: 'ecosystem/with-inputs' },
						{ label: 'denful', slug: 'ecosystem/denful' },
						{ label: 'dendritic-unflake', slug: 'ecosystem/dendritic-unflake' },
						{ label: 'den-diagram', slug: 'ecosystem/den-diagram' },
					],
				},
				{
					label: 'FRP, Streams & Data',
					items: [
						{ label: 'ned', slug: 'ecosystem/ned' },
						{ label: 'dnzl', slug: 'ecosystem/dnzl' },
						{ label: 'zen', slug: 'ecosystem/zen' },
						{ label: 'bend', slug: 'ecosystem/bend' },
					],
				},
				{
					label: 'Algebraic Effects',
					items: [
						{ label: 'nfx', slug: 'ecosystem/nfx' },
						{ label: 'pipe', slug: 'ecosystem/pipe' },
						{ label: 'fx-rs', slug: 'ecosystem/fx-rs' },
						{ label: 'fx.go', slug: 'ecosystem/fx-go' },
						{ label: 'rust-effects', slug: 'ecosystem/rust-effects' },
					],
				},
				{
					label: 'Nix Engines & Interaction Nets',
					items: [
						{ label: 'dnx', slug: 'ecosystem/dnx' },
						{ label: 'GoDNix', slug: 'ecosystem/godnix' },
						{ label: 'GoDNet', slug: 'ecosystem/godnet' },
						{ label: 'ranix', slug: 'ecosystem/ranix' },
					],
				},
				{
					label: 'Nix Tooling & Infra',
					items: [
						{ label: 'nix-versions', slug: 'ecosystem/nix-versions' },
						{ label: 'ntv', slug: 'ecosystem/ntv' },
						{ label: 'fastest', slug: 'ecosystem/fastest' },
						{ label: 'dag', slug: 'ecosystem/dag' },
						{ label: 'nest', slug: 'ecosystem/nest' },
					],
				},
				{
					label: 'Support',
					items: [
						{ label: 'Team', slug: 'sponsor' },
					],
				},
			],
			components: {
				Sidebar: './src/components/Sidebar.astro',
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				PageSidebar: './src/components/PageSidebar.astro',
			},
			plugins: [
				catppuccin({
					dark: { flavor: "macchiato", accent: "mauve" },
					light: { flavor: "latte", accent: "mauve" },
				}),
			],
			customCss: [
				'./src/styles/custom.css'
			],
		}),
	],
});
