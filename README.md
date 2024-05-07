# Vencord

The cutest Discord client mod, with extra plugins I like!


## Installing

You have to **compile** this version of Vencord to use it.

The guide is by Megu.

### Dependencies

-   Install Git from https://git-scm.com/download
-   Install Node.JS LTS from here: https://nodejs.dev/en/

### Installing Vencord

Install `pnpm`:

> :exclamation: This next command may need to be run as admin/root depending on your system, and you may need to close and reopen your terminal for pnpm to be in your PATH.

```shell
npm i -g pnpm
```

> :exclamation: **IMPORTANT** Make sure you aren't using an admin/root terminal from here onwards. It **will** mess up your Discord/Vencord instance and you **will** most likely have to reinstall.

Clone Vencord:

```shell
git clone https://github.com/Vendicated/Vencord
cd Vencord
```

Install dependencies:

```shell
pnpm install --frozen-lockfile
```

Build Vencord:

```shell
pnpm build
```

Inject vencord into your client:

```shell
pnpm inject
```

Then fully close Discord from your taskbar or task manager, and restart it. Vencord should be injected - you can check this by looking for the Vencord section in Discord settings.

## Join Vencord's Server

https://discord.gg/D9uwnFnqmd

## Star History

<a href="https://star-history.com/#Vendicated/Vencord&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=ios7jbpro/Vencord&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=ios7jbpro/Vencord&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Vios7jbpro/Vencord&type=Timeline" />
  </picture>
</a>

## Disclaimer

Discord is trademark of Discord Inc. and solely mentioned for the sake of descriptivity.
Mention of it does not imply any affiliation with or endorsement by Discord Inc.

<details>
<summary>Using Vencord violates Discord's terms of service</summary>

Client modifications are against Discord’s Terms of Service.

However, Discord is pretty indifferent about them and there are no known cases of users getting banned for using client mods! So you should generally be fine as long as you don’t use any plugins that implement abusive behaviour. But no worries, all inbuilt plugins are safe to use!

Regardless, if your account is very important to you and it getting disabled would be a disaster for you, you should probably not use any client mods (not exclusive to Vencord), just to be safe

Additionally, make sure not to post screenshots with Vencord in a server where you might get banned for it

</details>
