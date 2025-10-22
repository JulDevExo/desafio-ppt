// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"3dtlh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _router = require("./router");
var _welcomePage = require("./pages/welcome-page");
var _gamePage = require("./pages/game-page");
var _resultPage = require("./pages/result-page");
var _scorePage = require("./pages/score-page");
// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", ()=>{
    // Configurar el elemento root
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        console.error("Elemento #root no encontrado");
        return;
    }
    (0, _router.router).setRootElement(rootElement);
    // Registrar todas las rutas
    (0, _router.router).addRoute("/welcome", (0, _welcomePage.WelcomePage));
    (0, _router.router).addRoute("/game", (0, _gamePage.GamePage));
    (0, _router.router).addRoute("/result", (0, _resultPage.ResultPage));
    (0, _router.router).addRoute("/score", (0, _scorePage.ScorePage));
    // Iniciar la aplicación
    (0, _router.router).init();
    console.log("Aplicaci\xf3n Piedra, Papel o Tijera cargada");
});

},{"./router":"4wVP1","./pages/welcome-page":"6XAly","./pages/game-page":"i25wE","./pages/result-page":"9n0AA","./pages/score-page":"7XOPn"}],"4wVP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router);
class Router {
    constructor(){
        this.routes = [];
        this.rootElement = null;
        // Escuchar cambios en el historial
        window.addEventListener("popstate", ()=>{
            this.render();
        });
    }
    setRootElement(element) {
        this.rootElement = element;
    }
    addRoute(path, component) {
        this.routes.push({
            path,
            component
        });
    }
    navigate(path) {
        window.history.pushState({}, "", path);
        this.render();
    }
    render() {
        if (!this.rootElement) return;
        const path = window.location.pathname;
        const route = this.routes.find((r)=>r.path === path) || this.routes[0];
        if (route) {
            this.rootElement.innerHTML = "";
            const component = route.component();
            this.rootElement.appendChild(component);
        }
    }
    init() {
        // Si la ruta es la raíz, navegar a /welcome
        if (window.location.pathname === "/") this.navigate("/welcome");
        else this.render();
    }
}
const router = new Router();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6XAly":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WelcomePage", ()=>WelcomePage);
var _router = require("../router");
// Importar imágenes usando new URL para que Parcel las procese
const tituloImg = new URL(require("99aa5663a7d19296")).href;
const empezarBtn = new URL(require("bbe0dc9c5f0eaa1d")).href;
const tijeraImg = new URL(require("a195c1581f8d1eb7")).href;
const piedraImg = new URL(require("4351c53c5806f6f8")).href;
const papelImg = new URL(require("cdd44df2c3848a31")).href;
function WelcomePage() {
    const container = document.createElement("div");
    container.className = "page welcome-page";
    container.innerHTML = `
    <img
      src="${tituloImg}"
      alt="Piedra Papel Tijera"
      class="title-image"
    />

    <button class="start-button">
      <img src="${empezarBtn}" alt="Empezar" />
    </button>

    <div class="hands-container">
      <img src="${tijeraImg}" alt="Tijera" class="hand-icon" />
      <img src="${piedraImg}" alt="Piedra" class="hand-icon" />
      <img src="${papelImg}" alt="Papel" class="hand-icon" />
    </div>
  `;
    const startButton = container.querySelector(".start-button");
    startButton.addEventListener("click", ()=>{
        (0, _router.router).navigate("/game");
    });
    return container;
}

},{"../router":"4wVP1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","99aa5663a7d19296":"8I2Fq","bbe0dc9c5f0eaa1d":"8W1Ca","a195c1581f8d1eb7":"afyP0","4351c53c5806f6f8":"er6z3","cdd44df2c3848a31":"7NjOP"}],"8I2Fq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Piedra Papel Tijera titulo.cfa75f77.png") + "?" + Date.now();

},{}],"8W1Ca":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bot\xf3n empezar.939f4454.png") + "?" + Date.now();

},{}],"afyP0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tijera.61bca38c.png") + "?" + Date.now();

},{}],"er6z3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("piedra.c384c11c.png") + "?" + Date.now();

},{}],"7NjOP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("papel.13006fa4.png") + "?" + Date.now();

},{}],"i25wE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GamePage", ()=>GamePage);
var _router = require("../router");
var _state = require("../state");
// Importar imágenes
const tituloImg = new URL(require("ae6dbb99b0a657da")).href;
const piedraImg = new URL(require("6c63fb4085fca34d")).href;
const papelImg = new URL(require("c1a426ac7aadb032")).href;
const tijeraImg = new URL(require("70c85ac6fb921646")).href;
const robotImg = new URL(require("a6d1b83f606c14c9")).href;
function GamePage() {
    const container = document.createElement("div");
    container.className = "page game-page";
    container.innerHTML = `
    <div class="game-header">
      <img
        src="${tituloImg}"
        alt="T\xedtulo"
        class="title-small"
      />
    </div>

    <div class="game-content">
      <div class="player-section">
        <h2 class="player-label">T\xfa</h2>
        <div class="choice-buttons">
          <button class="choice-btn" data-choice="piedra">
            <img src="${piedraImg}" alt="Piedra" />
          </button>
          <button class="choice-btn" data-choice="papel">
            <img src="${papelImg}" alt="Papel" />
          </button>
          <button class="choice-btn" data-choice="tijera">
            <img src="${tijeraImg}" alt="Tijera" />
          </button>
        </div>
      </div>

      <div class="vs-divider">
        <h2>VS</h2>
      </div>

      <div class="computer-section">
        <h2 class="player-label">Computadora</h2>
        <div class="computer-choice">
          <img src="${robotImg}" alt="Robot" class="robot-img" />
        </div>
      </div>
    </div>
  `;
    const choiceButtons = container.querySelectorAll(".choice-btn");
    choiceButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            const choice = button.getAttribute("data-choice");
            // Deshabilitar todos los botones
            choiceButtons.forEach((btn)=>btn.disabled = true);
            // Resaltar el botón seleccionado
            button.classList.add("selected");
            // Jugar el juego
            (0, _state.state).playGame(choice);
            // Crear overlay de conteo regresivo
            const countdownOverlay = document.createElement("div");
            countdownOverlay.className = "countdown-overlay";
            const countdownNumber = document.createElement("div");
            countdownNumber.className = "countdown-number countdown-animate";
            countdownNumber.textContent = "3";
            countdownOverlay.appendChild(countdownNumber);
            container.appendChild(countdownOverlay);
            // Animar el conteo regresivo
            let count = 3;
            const countdownInterval = setInterval(()=>{
                count--;
                if (count > 0) {
                    countdownNumber.textContent = count.toString();
                    countdownNumber.style.animation = "none";
                    // Forzar reflow para reiniciar la animación
                    countdownNumber.offsetWidth;
                    countdownNumber.style.animation = "";
                } else {
                    clearInterval(countdownInterval);
                    (0, _router.router).navigate("/result");
                }
            }, 1000);
        });
    });
    return container;
}

},{"../router":"4wVP1","../state":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","ae6dbb99b0a657da":"8I2Fq","6c63fb4085fca34d":"er6z3","c1a426ac7aadb032":"7NjOP","70c85ac6fb921646":"afyP0","a6d1b83f606c14c9":"2X7gx"}],"dWXvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
class State {
    constructor(){
        this.listeners = [];
        // Cargar datos del localStorage
        const savedWins = localStorage.getItem("wins");
        const savedLosses = localStorage.getItem("losses");
        this.state = {
            playerChoice: null,
            computerChoice: null,
            result: null,
            wins: savedWins ? parseInt(savedWins) : 0,
            losses: savedLosses ? parseInt(savedLosses) : 0
        };
    }
    getState() {
        return {
            ...this.state
        };
    }
    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        };
        // Guardar en localStorage si hay cambios en wins o losses
        if (newState.wins !== undefined) localStorage.setItem("wins", this.state.wins.toString());
        if (newState.losses !== undefined) localStorage.setItem("losses", this.state.losses.toString());
        this.notifyListeners();
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    notifyListeners() {
        this.listeners.forEach((listener)=>listener());
    }
    playGame(playerChoice) {
        const choices = [
            "piedra",
            "papel",
            "tijera"
        ];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result;
        if (playerChoice === computerChoice) result = "tie";
        else if (playerChoice === "piedra" && computerChoice === "tijera" || playerChoice === "papel" && computerChoice === "piedra" || playerChoice === "tijera" && computerChoice === "papel") {
            result = "win";
            this.setState({
                wins: this.state.wins + 1
            });
        } else {
            result = "lose";
            this.setState({
                losses: this.state.losses + 1
            });
        }
        this.setState({
            playerChoice,
            computerChoice,
            result
        });
    }
    resetGame() {
        this.setState({
            playerChoice: null,
            computerChoice: null,
            result: null
        });
    }
    resetScore() {
        this.setState({
            wins: 0,
            losses: 0
        });
        localStorage.removeItem("wins");
        localStorage.removeItem("losses");
    }
}
const state = new State();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2X7gx":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("robot-amigable.a5ede4e1.jpg") + "?" + Date.now();

},{}],"9n0AA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResultPage", ()=>ResultPage);
var _router = require("../router");
var _state = require("../state");
// Importar imágenes
const ganasteImg = new URL(require("8445d8ceb5fab0f2")).href;
const perdisteImg = new URL(require("f9b7ab1fa9dd266b")).href;
const piedraImg = new URL(require("fb28688cd27ad93d")).href;
const papelImg = new URL(require("a6c1e0214d8f3591")).href;
const tijeraImg = new URL(require("23cd25caa436d800")).href;
const volverBtn = new URL(require("fbfebd6ce4195f26")).href;
function ResultPage() {
    const container = document.createElement("div");
    container.className = "page result-page";
    const gameState = (0, _state.state).getState();
    const { playerChoice, computerChoice, result } = gameState;
    const resultImage = result === "win" ? ganasteImg : result === "lose" ? perdisteImg : "";
    const resultText = result === "tie" ? "\xa1Empate!" : "";
    // Mapeo de las elecciones a las imágenes
    const choiceImages = {
        piedra: piedraImg,
        papel: papelImg,
        tijera: tijeraImg
    };
    container.innerHTML = `
    <div class="result-content">
      ${resultImage ? `<img src="${resultImage}" alt="Resultado" class="result-image" />` : `<h1 class="tie-text">${resultText}</h1>`}
      
      <div class="choices-display">
        <div class="choice-item">
          <h3>T\xfa</h3>
          <img src="${choiceImages[playerChoice || "piedra"]}" alt="${playerChoice}" class="choice-img" />
        </div>
        
        <div class="choice-item">
          <h3>Computadora</h3>
          <img src="${choiceImages[computerChoice || "piedra"]}" alt="${computerChoice}" class="choice-img" />
        </div>
      </div>

      <div class="result-buttons">
        <button class="play-again-btn">
          <img src="${volverBtn}" alt="Volver a jugar" />
        </button>
        <button class="score-btn">Ver puntuaci\xf3n</button>
      </div>
    </div>
  `;
    const playAgainBtn = container.querySelector(".play-again-btn");
    const scoreBtn = container.querySelector(".score-btn");
    playAgainBtn.addEventListener("click", ()=>{
        (0, _state.state).resetGame();
        (0, _router.router).navigate("/game");
    });
    scoreBtn.addEventListener("click", ()=>{
        (0, _router.router).navigate("/score");
    });
    return container;
}

},{"../router":"4wVP1","../state":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","8445d8ceb5fab0f2":"7aPwA","f9b7ab1fa9dd266b":"eCeru","fb28688cd27ad93d":"er6z3","a6c1e0214d8f3591":"7NjOP","23cd25caa436d800":"afyP0","fbfebd6ce4195f26":"2MjlW"}],"7aPwA":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("resultado ganaste.bad7ab53.png") + "?" + Date.now();

},{}],"eCeru":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("resultado perdiste.8c26e4fb.png") + "?" + Date.now();

},{}],"2MjlW":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bot\xf3n volver a jugar.144485f8.png") + "?" + Date.now();

},{}],"7XOPn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Importar imágenes
parcelHelpers.export(exports, "ScorePage", ()=>ScorePage);
var _router = require("../router");
var _state = require("../state");
function ScorePage() {
    const container = document.createElement("div");
    container.className = "page score-page";
    const gameState = (0, _state.state).getState();
    container.innerHTML = `
    <div class="score-content">
      
      <div class="score-display">
        <div class="score-item">
          <h2>Ganadas</h2>
          <div class="score-number">${gameState.wins}</div>
        </div>
        
        <div class="score-divider"></div>
        
        <div class="score-item">
          <h2>Perdidas</h2>
          <div class="score-number">${gameState.losses}</div>
        </div>
      </div>

      <div class="score-buttons">
        <button class="back-btn">Volver al juego</button>
        <button class="reset-btn">Reiniciar puntuaci\xf3n</button>
      </div>
    </div>
  `;
    const backBtn = container.querySelector(".back-btn");
    const resetBtn = container.querySelector(".reset-btn");
    backBtn.addEventListener("click", ()=>{
        (0, _router.router).navigate("/game");
    });
    resetBtn.addEventListener("click", ()=>{
        if (confirm("\xbfEst\xe1s seguro de que quieres reiniciar la puntuaci\xf3n?")) {
            (0, _state.state).resetScore();
            (0, _router.router).navigate("/score");
        }
    });
    return container;
}

},{"../router":"4wVP1","../state":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["3dtlh","gH3Lb"], "gH3Lb", "parcelRequire0eff", {}, "./", "/")

//# sourceMappingURL=desafio-ppt.34df32e0.js.map
