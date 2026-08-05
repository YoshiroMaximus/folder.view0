# FolderView0 for Unraid 7

FolderView0 lets you create folders for grouping Docker containers and VMs together to help with
organization. Especially useful if you're using docker-compose. A button named **Add Folder** appears
at the bottom of the Docker/VM tab next to "Add Container/VM".

## About this fork

This is a fork of [**VladoPortos/folder.view2**](https://github.com/VladoPortos/folder.view2), which
is itself a fork of the original by [**scolcipitato**](https://github.com/scolcipitato/folder.view).
It exists because upstream stopped tracking changes in current Unraid 7.x releases.

The plugin is renamed to `folder.view0` so it installs and updates independently of upstream. Your
existing folder definitions are carried over automatically — see [Installation](#installation).

### Fixed in this fork

- **Folder CPU/memory stats showed 0.** Unraid publishes container load on `/sub/dockerload` via
  `NchanSubscriber`, which hands the callback a plain string. The aggregate handler only accepted an
  `EventSource`-style event object, so it discarded every message and the folder row never updated.
- **Compose and 3rd-party containers could not be foldered.** Unraid only wraps the container name in
  a link for `dockerman`-managed containers; the row lookup required that link, so everything else was
  silently skipped.
- **No hover preview for compose containers** in the "Only label" preview mode, for the same reason.
- **VM folder rows spanned 7 of the VM table's 8 columns.** The span is now read from the live table
  header instead of being hardcoded, so it survives future column changes.
- **The incorrect-autostart-order warning never appeared** — it targeted a nav item Unraid no longer
  renders. It now shows next to the "Add Folder" button.
- **`pkg_build.sh` chmod'd the entire repo** on every build, marking every archive and image as
  modified in git.

## Installation

Paste this URL into **Plugins → Install Plugin**:

```
https://raw.githubusercontent.com/YoshiroMaximus/folder.view0/main/folder.view0.plg
```

### Migrating from FolderView2 / FolderView

On first install, FolderView0 copies `docker.json` and `vm.json` from
`/boot/config/plugins/folder.view2` (or `folder.view`) into `/boot/config/plugins/folder.view0`, so
your folders come across as-is. The originals are left untouched — uninstall the old plugin once
you've confirmed everything looks right.

Container labels used to assign containers to a folder work under any of `folder.view0`,
`folder.view2`, or `folder.view`, so existing labels need no changes.

### Manual installation

1. Copy `folder.view0.plg` to `/boot/config/plugins/`.
2. Copy the latest `archive/folder.view0-<date>.txz` to `/boot/config/plugins/folder.view0/`.
3. In the Unraid webUI go to **Plugins → Install Plugin**, browse to `config` → `plugins` →
   `folder.view0.plg`, and press Install.

## Building

`./pkg_build.sh` packages `src/folder.view0/` into `archive/`, stamps the version from today's date,
and updates the version and MD5 in `folder.view0.plg`.

## Support & feedback

File an issue on [GitHub](https://github.com/YoshiroMaximus/folder.view0/issues).

## Credits

- [scolcipitato](https://github.com/scolcipitato/folder.view) — original author
- [VladoPortos](https://github.com/VladoPortos/folder.view2) — FolderView2
- [TurboStreetCar](https://github.com/TurboStreetCar) — improved `folder.js` for Unraid 7 compatibility
- [JohannesHo](https://github.com/JohannesHo) — docker preview layout fix

If you found the upstream work useful, VladoPortos takes coffee at
[ko-fi.com/vladoportos](https://ko-fi.com/vladoportos).

### Libraries used

- [Chart.js](https://www.chartjs.org/), [chartjs-adapter-moment](https://github.com/chartjs/chartjs-adapter-moment),
  [chartjs-plugin-streaming](https://github.com/nagix/chartjs-plugin-streaming)
- [Moment.js](https://momentjs.com/)
- [jquery.i18n](https://github.com/wikimedia/jquery.i18n)
- [jQuery UI MultiSelect](https://github.com/ehynds/jquery-ui-multiselect-widget)
