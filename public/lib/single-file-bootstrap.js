!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        ((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).singlefileBootstrap = {})
      )
})(this, function (e) {
  'use strict'
  const t = 'single-file-load-deferred-images-start',
    s = 'single-file-load-deferred-images-end',
    o = 'single-file-load-deferred-images-keep-zoom-level-start',
    n = 'single-file-load-deferred-images-keep-zoom-level-end',
    a = 'single-file-block-cookies-start',
    i = 'single-file-block-cookies-end',
    r = 'single-file-dispatch-scroll-event-start',
    l = 'single-file-dispatch-scroll-event-end',
    d = 'single-file-block-storage-start',
    c = 'single-file-block-storage-end',
    m = 'single-file-load-image',
    u = 'single-file-image-loaded',
    p = '_singleFile_fontFaces',
    g = globalThis.CustomEvent,
    h = globalThis.document,
    f = globalThis.Document,
    E = globalThis.JSON,
    T = globalThis.MutationObserver
  let b
  function y() {
    h instanceof f &&
      (h.addEventListener('single-file-new-font-face', e => {
        const t = e.detail,
          s = Object.assign({}, t)
        delete s.src, b.set(E.stringify(s), t)
      }),
      h.addEventListener('single-file-delete-font', e => {
        const t = e.detail,
          s = Object.assign({}, t)
        delete s.src, b.delete(E.stringify(s))
      }),
      h.addEventListener('single-file-clear-fonts', () => (b = new Map())))
  }
  ;(b = window[p] ? window[p] : (window[p] = new Map())),
    y(),
    new T(y).observe(h, { childList: !0 })
  const I = '[\\x20\\t\\r\\n\\f]',
    w = new RegExp('\\\\([\\da-f]{1,6}' + I + '?|(' + I + ')|.)', 'ig')
  const A = 'single-file-',
    v = '_singleFile_waitForUserScript',
    S = '__frameTree__::',
    R = A + 'on-before-capture',
    N = A + 'on-after-capture',
    P = A + 'request-get-adopted-stylesheets',
    _ = A + 'response-get-adopted-stylesheets',
    M = A + 'unregister-request-get-adopted-stylesheets',
    C = A + 'user-script-init',
    O = 'data-' + A + 'removed-content',
    L = 'data-' + A + 'hidden-content',
    D = 'data-' + A + 'kept-content',
    x = 'data-' + A + 'hidden-frame',
    F = 'data-' + A + 'preserved-space-element',
    U = 'data-' + A + 'shadow-root-element',
    q = 'data-' + A + 'win-id',
    k = 'data-' + A + 'image',
    H = 'data-' + A + 'poster',
    V = 'data-' + A + 'video',
    B = 'data-' + A + 'canvas',
    W = 'data-' + A + 'movable-style',
    z = 'data-' + A + 'input-value',
    Y = 'data-' + A + 'lazy-loaded-src',
    j = 'data-' + A + 'stylesheet',
    G = 'data-' + A + 'disabled-noscript',
    K = 'data-' + A + 'invalid-element',
    X = 'data-' + A + 'async-script',
    Z =
      '*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)',
    J = [
      'NOSCRIPT',
      'DISABLED-NOSCRIPT',
      'META',
      'LINK',
      'STYLE',
      'TITLE',
      'TEMPLATE',
      'SOURCE',
      'OBJECT',
      'SCRIPT',
      'HEAD',
      'BODY',
    ],
    $ = ['SCRIPT', 'NOSCRIPT', 'META', 'LINK', 'TEMPLATE'],
    Q = /^'(.*?)'$/,
    ee = /^"(.*?)"$/,
    te = {
      regular: '400',
      normal: '400',
      bold: '700',
      bolder: '700',
      lighter: '100',
    },
    se = 'single-file-ui-element',
    oe = 'single-file-infobar',
    ne = 'data:,',
    ae = (e, t, s) => globalThis.addEventListener(e, t, s),
    ie = globalThis.JSON,
    re = globalThis.CustomEvent,
    le = globalThis.MutationObserver
  function de(e, t, s) {
    e.querySelectorAll('noscript:not([' + G + '])').forEach(e => {
      e.setAttribute(G, e.textContent), (e.textContent = '')
    }),
      (function (e) {
        e.querySelectorAll('meta[http-equiv=refresh]').forEach(e => {
          e.removeAttribute('http-equiv'),
            e.setAttribute('disabled-http-equiv', 'refresh')
        })
      })(e),
      e.head && e.head.querySelectorAll(Z).forEach(e => (e.hidden = !0)),
      e.querySelectorAll('svg foreignObject').forEach(e => {
        const t = e.querySelectorAll(
          'html > head > ' + Z + ', html > body > ' + Z
        )
        t.length &&
          (Array.from(e.childNodes).forEach(e => e.remove()),
          t.forEach(t => e.appendChild(t)))
      })
    const o = new Map()
    let n
    return (
      t && e.documentElement
        ? (e.querySelectorAll('button button, a a').forEach(t => {
            const s = e.createElement('template')
            s.setAttribute(K, ''),
              s.content.appendChild(t.cloneNode(!0)),
              o.set(t, s),
              t.replaceWith(s)
          }),
          (n = ce(t, e, e.documentElement, s)),
          s.moveStylesInHead &&
            e.querySelectorAll('body style, body ~ style').forEach(e => {
              const s = be(t, e)
              s && he(e, s) && (e.setAttribute(W, ''), n.markedElements.push(e))
            }))
        : (n = {
            canvases: [],
            images: [],
            posters: [],
            videos: [],
            usedFonts: [],
            shadowRoots: [],
            markedElements: [],
          }),
      {
        canvases: n.canvases,
        fonts: Array.from(b.values()),
        stylesheets: Ee(e),
        images: n.images,
        posters: n.posters,
        videos: n.videos,
        usedFonts: Array.from(n.usedFonts.values()),
        shadowRoots: n.shadowRoots,
        referrer: e.referrer,
        markedElements: n.markedElements,
        invalidElements: o,
        scrollPosition: { x: t.scrollX, y: t.scrollY },
        adoptedStyleSheets: me(e.adoptedStyleSheets),
      }
    )
  }
  function ce(
    e,
    t,
    s,
    o,
    n = {
      usedFonts: new Map(),
      canvases: [],
      images: [],
      posters: [],
      videos: [],
      shadowRoots: [],
      markedElements: [],
    },
    a
  ) {
    if (s.childNodes) {
      Array.from(s.childNodes)
        .filter(
          t =>
            t instanceof e.HTMLElement ||
            t instanceof e.SVGElement ||
            t instanceof globalThis.HTMLElement ||
            t instanceof globalThis.SVGElement
        )
        .forEach(s => {
          let i, r, l
          if (
            !o.autoSaveExternalSave &&
            (o.removeHiddenElements || o.removeUnusedFonts || o.compressHTML) &&
            ((l = be(e, s)),
            (s instanceof e.HTMLElement ||
              s instanceof globalThis.HTMLElement) &&
              o.removeHiddenElements &&
              ((r =
                ((a || s.closest('html > head')) &&
                  J.includes(s.tagName.toUpperCase())) ||
                s.closest('details')),
              r ||
                ((i = a || he(s, l)),
                i &&
                  !$.includes(s.tagName.toUpperCase()) &&
                  (s.setAttribute(L, ''), n.markedElements.push(s)))),
            !i)
          ) {
            if (o.compressHTML && l) {
              const e = l.getPropertyValue('white-space')
              e &&
                e.startsWith('pre') &&
                (s.setAttribute(F, ''), n.markedElements.push(s))
            }
            o.removeUnusedFonts &&
              (ue(l, o, n.usedFonts),
              ue(be(e, s, ':first-letter'), o, n.usedFonts),
              ue(be(e, s, ':before'), o, n.usedFonts),
              ue(be(e, s, ':after'), o, n.usedFonts))
          }
          !(function (e, t, s, o, n, a, i) {
            const r = s.tagName && s.tagName.toUpperCase()
            if ('CANVAS' == r)
              try {
                n.canvases.push({
                  dataURI: s.toDataURL('image/png', ''),
                  backgroundColor: i.getPropertyValue('background-color'),
                }),
                  s.setAttribute(B, n.canvases.length - 1),
                  n.markedElements.push(s)
              } catch (e) {}
            if ('IMG' == r) {
              const t = {
                currentSrc: a
                  ? ne
                  : (o.loadDeferredImages && s.getAttribute(Y)) || s.currentSrc,
              }
              if (
                (n.images.push(t),
                s.setAttribute(k, n.images.length - 1),
                n.markedElements.push(s),
                s.removeAttribute(Y),
                (i = i || be(e, s)))
              ) {
                t.size = (function (e, t, s) {
                  let o = t.naturalWidth,
                    n = t.naturalHeight
                  if (!o && !n) {
                    const a = null == t.getAttribute('style')
                    if ((s = s || be(e, t))) {
                      let e,
                        i,
                        r,
                        l,
                        d,
                        c,
                        m,
                        u,
                        p = !1
                      if ('content-box' == s.getPropertyValue('box-sizing')) {
                        const e = t.style.getPropertyValue('box-sizing'),
                          s = t.style.getPropertyPriority('box-sizing'),
                          o = t.clientWidth
                        t.style.setProperty(
                          'box-sizing',
                          'border-box',
                          'important'
                        ),
                          (p = t.clientWidth != o),
                          e
                            ? t.style.setProperty('box-sizing', e, s)
                            : t.style.removeProperty('box-sizing')
                      }
                      ;(e = Te('padding-left', s)),
                        (i = Te('padding-right', s)),
                        (r = Te('padding-top', s)),
                        (l = Te('padding-bottom', s)),
                        p
                          ? ((d = Te('border-left-width', s)),
                            (c = Te('border-right-width', s)),
                            (m = Te('border-top-width', s)),
                            (u = Te('border-bottom-width', s)))
                          : (d = c = m = u = 0),
                        (o = Math.max(0, t.clientWidth - e - i - d - c)),
                        (n = Math.max(0, t.clientHeight - r - l - m - u)),
                        a && t.removeAttribute('style')
                    }
                  }
                  return { pxWidth: o, pxHeight: n }
                })(e, s, i)
                const o = i.getPropertyValue('box-shadow'),
                  n = i.getPropertyValue('background-image')
                ;(o && 'none' != o) ||
                  (n && 'none' != n) ||
                  !(t.size.pxWidth > 1 || t.size.pxHeight > 1) ||
                  ((t.replaceable = !0),
                  (t.backgroundColor = i.getPropertyValue('background-color')),
                  (t.objectFit = i.getPropertyValue('object-fit')),
                  (t.boxSizing = i.getPropertyValue('box-sizing')),
                  (t.objectPosition = i.getPropertyValue('object-position')))
              }
            }
            if ('VIDEO' == r) {
              const o = s.currentSrc
              if (o && !o.startsWith('blob:') && !o.startsWith('data:')) {
                const t = be(e, s.parentNode)
                n.videos.push({
                  positionParent: t && t.getPropertyValue('position'),
                  src: o,
                  size: { pxWidth: s.clientWidth, pxHeight: s.clientHeight },
                  currentTime: s.currentTime,
                }),
                  s.setAttribute(V, n.videos.length - 1)
              }
              if (!s.getAttribute('poster')) {
                const e = t.createElement('canvas'),
                  o = e.getContext('2d')
                ;(e.width = s.clientWidth), (e.height = s.clientHeight)
                try {
                  o.drawImage(s, 0, 0, e.width, e.height),
                    n.posters.push(e.toDataURL('image/png', '')),
                    s.setAttribute(H, n.posters.length - 1),
                    n.markedElements.push(s)
                } catch (e) {}
              }
            }
            'IFRAME' == r &&
              a &&
              o.removeHiddenElements &&
              (s.setAttribute(x, ''), n.markedElements.push(s))
            'INPUT' == r &&
              ('password' != s.type &&
                (s.setAttribute(z, s.value), n.markedElements.push(s)),
              ('radio' != s.type && 'checkbox' != s.type) ||
                (s.setAttribute(z, s.checked), n.markedElements.push(s)))
            'TEXTAREA' == r &&
              (s.setAttribute(z, s.value), n.markedElements.push(s))
            'SELECT' == r &&
              s.querySelectorAll('option').forEach(e => {
                e.selected && (e.setAttribute(z, ''), n.markedElements.push(e))
              })
            'SCRIPT' == r &&
              (s.async &&
                '' != s.getAttribute('async') &&
                'async' != s.getAttribute('async') &&
                (s.setAttribute(X, ''), n.markedElements.push(s)),
              (s.textContent = s.textContent.replace(
                /<\/script>/gi,
                '<\\/script>'
              )))
          })(e, t, s, o, n, i, l)
          const d =
            !(
              s instanceof e.SVGElement || s instanceof globalThis.SVGElement
            ) && pe(s)
          if (d && !s.classList.contains(se) && s.tagName.toLowerCase() != oe) {
            const a = {}
            s.setAttribute(U, n.shadowRoots.length),
              n.markedElements.push(s),
              n.shadowRoots.push(a)
            try {
              if (d.adoptedStyleSheets)
                if (d.adoptedStyleSheets.length)
                  a.adoptedStyleSheets = me(d.adoptedStyleSheets)
                else if (void 0 === d.adoptedStyleSheets.length) {
                  const e = e =>
                    (a.adoptedStyleSheets = e.detail.adoptedStyleSheets)
                  d.addEventListener(_, e),
                    d.dispatchEvent(new re(P, { bubbles: !0 })),
                    a.adoptedStyleSheets ||
                      s.dispatchEvent(new re(P, { bubbles: !0 })),
                    d.removeEventListener(_, e)
                }
            } catch (e) {}
            ce(e, t, d, o, n, i), (a.content = d.innerHTML), (a.mode = d.mode)
            try {
              d.adoptedStyleSheets &&
                void 0 === d.adoptedStyleSheets.length &&
                d.dispatchEvent(new re(M, { bubbles: !0 }))
            } catch (e) {}
          }
          ce(e, t, s, o, n, i),
            !o.autoSaveExternalSave &&
              o.removeHiddenElements &&
              a &&
              (r || '' == s.getAttribute(D)
                ? s.parentElement &&
                  (s.parentElement.setAttribute(D, ''),
                  n.markedElements.push(s.parentElement))
                : i && (s.setAttribute(O, ''), n.markedElements.push(s)))
        })
    }
    return n
  }
  function me(e) {
    return e
      ? Array.from(e).map(e =>
          Array.from(e.cssRules)
            .map(e => e.cssText)
            .join('\n')
        )
      : []
  }
  function ue(e, t, s) {
    if (e) {
      const o = e.getPropertyValue('font-style') || 'normal'
      e.getPropertyValue('font-family')
        .split(',')
        .forEach(n => {
          if (
            ((n = ge(n)),
            !t.loadedFonts ||
              t.loadedFonts.find(e => ge(e.family) == n && e.style == o))
          ) {
            const t =
                ((a = e.getPropertyValue('font-weight')),
                te[a.toLowerCase().trim()] || a),
              i = e.getPropertyValue('font-variant') || 'normal',
              r = [n, t, o, i]
            s.set(ie.stringify(r), [n, t, o, i])
          }
          var a
        })
    }
  }
  function pe(e) {
    const t = globalThis.chrome
    if (e.openOrClosedShadowRoot) return e.openOrClosedShadowRoot
    if (!(t && t.dom && t.dom.openOrClosedShadowRoot)) return e.shadowRoot
    try {
      return t.dom.openOrClosedShadowRoot(e)
    } catch (t) {
      return e.shadowRoot
    }
  }
  function ge(e = '') {
    return (function (e) {
      e = e.match(Q) ? e.replace(Q, '$1') : e.replace(ee, '$1')
      return e.trim()
    })(
      ((t = e.trim()),
      t.replace(w, (e, t, s) => {
        const o = '0x' + t - 65536
        return o != o || s
          ? t
          : o < 0
          ? String.fromCharCode(o + 65536)
          : String.fromCharCode((o >> 10) | 55296, (1023 & o) | 56320)
      }))
    ).toLowerCase()
    var t
  }
  function he(e, t) {
    let s = !1
    if (t) {
      const o = t.getPropertyValue('display'),
        n = t.getPropertyValue('opacity'),
        a = t.getPropertyValue('visibility')
      if (
        ((s = 'none' == o),
        !s && ('0' == n || 'hidden' == a) && e.getBoundingClientRect)
      ) {
        const t = e.getBoundingClientRect()
        s = !t.width && !t.height
      }
    }
    return Boolean(s)
  }
  function fe(e, t, s) {
    if (
      (e.querySelectorAll('[' + G + ']').forEach(e => {
        ;(e.textContent = e.getAttribute(G)), e.removeAttribute(G)
      }),
      e.querySelectorAll('meta[disabled-http-equiv]').forEach(e => {
        e.setAttribute('http-equiv', e.getAttribute('disabled-http-equiv')),
          e.removeAttribute('disabled-http-equiv')
      }),
      e.head &&
        e.head
          .querySelectorAll(
            '*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)'
          )
          .forEach(e => e.removeAttribute('hidden')),
      !t)
    ) {
      const s = [O, x, L, F, k, H, V, B, z, U, j, X]
      t = e.querySelectorAll(s.map(e => '[' + e + ']').join(','))
    }
    t.forEach(e => {
      e.removeAttribute(O),
        e.removeAttribute(L),
        e.removeAttribute(D),
        e.removeAttribute(x),
        e.removeAttribute(F),
        e.removeAttribute(k),
        e.removeAttribute(H),
        e.removeAttribute(V),
        e.removeAttribute(B),
        e.removeAttribute(z),
        e.removeAttribute(U),
        e.removeAttribute(j),
        e.removeAttribute(X),
        e.removeAttribute(W)
    }),
      s && s.forEach((e, t) => e.replaceWith(t))
  }
  function Ee(e) {
    if (e) {
      const t = []
      return (
        e.querySelectorAll('style').forEach((s, o) => {
          try {
            if (!s.sheet.disabled) {
              const n = e.createElement('style')
              ;(n.textContent = s.textContent), e.body.appendChild(n)
              const a = n.sheet
              n.remove()
              const i = Array.from(a.cssRules)
                  .map(e => e.cssText)
                  .join('\n'),
                r = Array.from(s.sheet.cssRules)
                  .map(e => e.cssText)
                  .join('\n')
              ;(a && i == r) ||
                (s.setAttribute(j, o),
                (t[o] = Array.from(s.sheet.cssRules)
                  .map(e => e.cssText)
                  .join('\n')))
            }
          } catch (e) {}
        }),
        t
      )
    }
  }
  function Te(e, t) {
    if (t.getPropertyValue(e).endsWith('px'))
      return parseFloat(t.getPropertyValue(e))
  }
  function be(e, t, s) {
    try {
      return e.getComputedStyle(t, s)
    } catch (e) {}
  }
  const ye = { LAZY_SRC_ATTRIBUTE_NAME: Y, SINGLE_FILE_UI_ELEMENT_CLASS: se },
    Ie = 10,
    we = 'attributes',
    Ae = globalThis.browser,
    ve = globalThis.document,
    Se = globalThis.MutationObserver,
    Re = new Map()
  let Ne
  async function Pe(e) {
    if (ve.documentElement) {
      Re.clear()
      const s = ve.body
          ? Math.max(ve.body.scrollHeight, ve.documentElement.scrollHeight)
          : ve.documentElement.scrollHeight,
        n = ve.body
          ? Math.max(ve.body.scrollWidth, ve.documentElement.scrollWidth)
          : ve.documentElement.scrollWidth
      if (s > globalThis.innerHeight || n > globalThis.innerWidth) {
        const i = Math.max(s - 1.5 * globalThis.innerHeight, 0),
          l = Math.max(n - 1.5 * globalThis.innerWidth, 0)
        if (globalThis.scrollY < i || globalThis.scrollX < l)
          return (function (e) {
            return (
              (Ne = 0),
              new Promise(async s => {
                let n
                const i = new Set(),
                  l = new Se(async t => {
                    if ((t = t.filter(e => e.type == we)).length) {
                      t.filter(e => {
                        if (
                          ('src' == e.attributeName &&
                            (e.target.setAttribute(
                              ye.LAZY_SRC_ATTRIBUTE_NAME,
                              e.target.src
                            ),
                            e.target.addEventListener('load', p)),
                          'src' == e.attributeName ||
                            'srcset' == e.attributeName ||
                            (e.target.tagName &&
                              'SOURCE' == e.target.tagName.toUpperCase()))
                        )
                          return (
                            !e.target.classList ||
                            !e.target.classList.contains(
                              ye.SINGLE_FILE_UI_ELEMENT_CLASS
                            )
                          )
                      }).length &&
                        ((n = !0),
                        await Me(l, e, T),
                        i.size || (await _e(l, e, T)))
                    }
                  })
                async function c(t) {
                  await Oe(
                    'idleTimeout',
                    async () => {
                      n
                        ? Ne < Ie &&
                          (Ne++,
                          De('idleTimeout'),
                          await c(Math.max(500, t / 2)))
                        : (De('loadTimeout'), De('maxTimeout'), Ce(l, e, T))
                    },
                    t,
                    e.loadDeferredImagesNativeTimeout
                  )
                }
                function p(e) {
                  const t = e.target
                  t.removeAttribute(ye.LAZY_SRC_ATTRIBUTE_NAME),
                    t.removeEventListener('load', p)
                }
                async function f(t) {
                  ;(n = !0),
                    await Me(l, e, T),
                    await _e(l, e, T),
                    t.detail && i.add(t.detail)
                }
                async function E(t) {
                  await Me(l, e, T),
                    await _e(l, e, T),
                    i.delete(t.detail),
                    i.size || (await _e(l, e, T))
                }
                function T(e) {
                  l.disconnect(),
                    ve.removeEventListener(m, f),
                    ve.removeEventListener(u, E),
                    s(e)
                }
                await c(2 * e.loadDeferredImagesMaxIdleTime),
                  await Me(l, e, T),
                  l.observe(ve, { subtree: !0, childList: !0, attributes: !0 }),
                  ve.addEventListener(m, f),
                  ve.addEventListener(u, E),
                  (function (e) {
                    e.loadDeferredImagesBlockCookies &&
                      h.dispatchEvent(new g(a)),
                      e.loadDeferredImagesBlockStorage &&
                        h.dispatchEvent(new g(d)),
                      e.loadDeferredImagesDispatchScrollEvent &&
                        h.dispatchEvent(new g(r)),
                      e.loadDeferredImagesKeepZoomLevel
                        ? h.dispatchEvent(new g(o))
                        : h.dispatchEvent(new g(t))
                  })(e)
              })
            )
          })(e)
      }
    }
  }
  async function _e(e, t, s) {
    await Oe(
      'loadTimeout',
      () => Ce(e, t, s),
      t.loadDeferredImagesMaxIdleTime,
      t.loadDeferredImagesNativeTimeout
    )
  }
  async function Me(e, t, s) {
    await Oe(
      'maxTimeout',
      async () => {
        await De('loadTimeout'), await Ce(e, t, s)
      },
      10 * t.loadDeferredImagesMaxIdleTime,
      t.loadDeferredImagesNativeTimeout
    )
  }
  async function Ce(e, t, o) {
    await De('idleTimeout'),
      (function (e) {
        e.loadDeferredImagesBlockCookies && h.dispatchEvent(new g(i)),
          e.loadDeferredImagesBlockStorage && h.dispatchEvent(new g(c)),
          e.loadDeferredImagesDispatchScrollEvent && h.dispatchEvent(new g(l)),
          e.loadDeferredImagesKeepZoomLevel
            ? h.dispatchEvent(new g(n))
            : h.dispatchEvent(new g(s))
      })(t),
      await Oe(
        'endTimeout',
        async () => {
          await De('maxTimeout'), o()
        },
        t.loadDeferredImagesMaxIdleTime / 2,
        t.loadDeferredImagesNativeTimeout
      ),
      e.disconnect()
  }
  async function Oe(e, t, s, o) {
    if (Ae && Ae.runtime && Ae.runtime.sendMessage && !o) {
      if (!Re.get(e) || !Re.get(e).pending) {
        const o = { callback: t, pending: !0 }
        Re.set(e, o)
        try {
          await Ae.runtime.sendMessage({
            method: 'singlefile.lazyTimeout.setTimeout',
            type: e,
            delay: s,
          })
        } catch (o) {
          Le(e, t, s)
        }
        o.pending = !1
      }
    } else Le(e, t, s)
  }
  function Le(e, t, s) {
    const o = Re.get(e)
    o && globalThis.clearTimeout(o), Re.set(e, t), globalThis.setTimeout(t, s)
  }
  async function De(e) {
    if (Ae && Ae.runtime && Ae.runtime.sendMessage)
      try {
        await Ae.runtime.sendMessage({
          method: 'singlefile.lazyTimeout.clearTimeout',
          type: e,
        })
      } catch (t) {
        xe(e)
      }
    else xe(e)
  }
  function xe(e) {
    const t = Re.get(e)
    Re.delete(e), t && globalThis.clearTimeout(t)
  }
  Ae &&
    Ae.runtime &&
    Ae.runtime.onMessage &&
    Ae.runtime.onMessage.addListener &&
    Ae.runtime.onMessage.addListener(e => {
      if ('singlefile.lazyTimeout.onTimeout' == e.method) {
        const t = Re.get(e.type)
        if (t) {
          Re.delete(e.type)
          try {
            t.callback()
          } catch (t) {
            xe(e.type)
          }
        }
      }
    })
  const Fe = {
      ON_BEFORE_CAPTURE_EVENT_NAME: R,
      ON_AFTER_CAPTURE_EVENT_NAME: N,
      WIN_ID_ATTRIBUTE_NAME: q,
      WAIT_FOR_USERSCRIPT_PROPERTY_NAME: v,
      preProcessDoc: de,
      serialize: function (e) {
        const t = e.doctype
        let s = ''
        return (
          t &&
            ((s = '<!DOCTYPE ' + t.nodeName),
            t.publicId
              ? ((s += ' PUBLIC "' + t.publicId + '"'),
                t.systemId && (s += ' "' + t.systemId + '"'))
              : t.systemId && (s += ' SYSTEM "' + t.systemId + '"'),
            t.internalSubset && (s += ' [' + t.internalSubset + ']'),
            (s += '> ')),
          s + e.documentElement.outerHTML
        )
      },
      postProcessDoc: fe,
      getShadowRoot: pe,
    },
    Ue = 'iframe, frame, object[type="text/html"][data]',
    qe = '*',
    ke = 'singlefile.frameTree.initRequest',
    He = 'singlefile.frameTree.ackInitRequest',
    Ve = 'singlefile.frameTree.cleanupRequest',
    Be = 'singlefile.frameTree.initResponse',
    We = '*',
    ze = 5e3,
    Ye = 1e4,
    je = '.',
    Ge = globalThis.window == globalThis.top,
    Ke = globalThis.browser,
    Xe = globalThis.top,
    Ze = globalThis.MessageChannel,
    Je = globalThis.document,
    $e = globalThis.JSON,
    Qe = globalThis.MutationObserver
  let et,
    tt = globalThis.sessions
  function st() {
    globalThis.addEventListener(
      'message',
      async e => {
        if ('string' == typeof e.data && e.data.startsWith(S)) {
          e.preventDefault(), e.stopPropagation()
          const t = $e.parse(e.data.substring(S.length))
          if (t.method == ke)
            e.source &&
              ut(e.source, {
                method: He,
                windowId: t.windowId,
                sessionId: t.sessionId,
              }),
              Ge ||
                (globalThis.stop(),
                t.options.loadDeferredImages && Pe(t.options),
                await nt(t))
          else if (t.method == He)
            lt('requestTimeouts', t.sessionId, t.windowId),
              dt(t.sessionId, t.windowId)
          else if (t.method == Ve) at(t)
          else if (t.method == Be && tt.get(t.sessionId)) {
            e.ports[0].onmessage = e => it(e.data)
          }
        }
      },
      !0
    )
  }
  function ot() {
    return globalThis.crypto.getRandomValues(new Uint32Array(32)).join('')
  }
  async function nt(e) {
    const t = e.sessionId,
      s = globalThis[Fe.WAIT_FOR_USERSCRIPT_PROPERTY_NAME]
    delete globalThis._singleFile_cleaningUp,
      Ge || (et = globalThis.frameId = e.windowId),
      rt(Je, e.options, et, t),
      Ge ||
        (e.options.userScriptEnabled &&
          s &&
          (await s(Fe.ON_BEFORE_CAPTURE_EVENT_NAME)),
        mt({
          frames: [pt(Je, globalThis, et, e.options, e.scrolling)],
          sessionId: t,
          requestedFrameId: Je.documentElement.dataset.requestedFrameId && et,
        }),
        e.options.userScriptEnabled &&
          s &&
          (await s(Fe.ON_AFTER_CAPTURE_EVENT_NAME)),
        delete Je.documentElement.dataset.requestedFrameId)
  }
  function at(e) {
    if (!globalThis._singleFile_cleaningUp) {
      globalThis._singleFile_cleaningUp = !0
      const t = e.sessionId
      ct(gt(Je), e.windowId, t)
    }
  }
  function it(e) {
    e.frames.forEach(t => lt('responseTimeouts', e.sessionId, t.windowId))
    const t = tt.get(e.sessionId)
    if (t) {
      e.requestedFrameId && (t.requestedFrameId = e.requestedFrameId),
        e.frames.forEach(e => {
          let s = t.frames.find(t => e.windowId == t.windowId)
          s || ((s = { windowId: e.windowId }), t.frames.push(s)),
            s.processed ||
              ((s.content = e.content),
              (s.baseURI = e.baseURI),
              (s.title = e.title),
              (s.url = e.url),
              (s.canvases = e.canvases),
              (s.fonts = e.fonts),
              (s.stylesheets = e.stylesheets),
              (s.images = e.images),
              (s.posters = e.posters),
              (s.videos = e.videos),
              (s.usedFonts = e.usedFonts),
              (s.shadowRoots = e.shadowRoots),
              (s.processed = e.processed),
              (s.scrollPosition = e.scrollPosition),
              (s.scrolling = e.scrolling),
              (s.adoptedStyleSheets = e.adoptedStyleSheets))
        })
      t.frames.filter(e => !e.processed).length ||
        ((t.frames = t.frames.sort(
          (e, t) => t.windowId.split(je).length - e.windowId.split(je).length
        )),
        t.resolve &&
          (t.requestedFrameId &&
            t.frames.forEach(e => {
              e.windowId == t.requestedFrameId && (e.requestedFrame = !0)
            }),
          t.resolve(t.frames)))
    }
  }
  function rt(e, t, s, o) {
    const n = gt(e)
    !(function (e, t, s, o, n) {
      const a = []
      let i
      tt.get(n)
        ? (i = tt.get(n).requestTimeouts)
        : ((i = {}), tt.set(n, { requestTimeouts: i }))
      t.forEach((e, t) => {
        const s = o + je + t
        e.setAttribute(Fe.WIN_ID_ATTRIBUTE_NAME, s), a.push({ windowId: s })
      }),
        mt({
          frames: a,
          sessionId: n,
          requestedFrameId: e.documentElement.dataset.requestedFrameId && o,
        }),
        t.forEach((e, t) => {
          const a = o + je + t
          try {
            ut(e.contentWindow, {
              method: ke,
              windowId: a,
              sessionId: n,
              options: s,
              scrolling: e.scrolling,
            })
          } catch (e) {}
          i[a] = globalThis.setTimeout(
            () =>
              mt({ frames: [{ windowId: a, processed: !0 }], sessionId: n }),
            ze
          )
        }),
        delete e.documentElement.dataset.requestedFrameId
    })(e, n, t, s, o),
      n.length &&
        (function (e, t, s, o, n) {
          const a = []
          t.forEach((e, t) => {
            const i = o + je + t
            let r
            try {
              r = e.contentDocument
            } catch (e) {}
            if (r)
              try {
                const t = e.contentWindow
                t.stop(),
                  lt('requestTimeouts', n, i),
                  rt(r, s, i, n),
                  a.push(pt(r, t, i, s, e.scrolling))
              } catch (e) {
                a.push({ windowId: i, processed: !0 })
              }
          }),
            mt({
              frames: a,
              sessionId: n,
              requestedFrameId: e.documentElement.dataset.requestedFrameId && o,
            }),
            delete e.documentElement.dataset.requestedFrameId
        })(e, n, t, s, o)
  }
  function lt(e, t, s) {
    const o = tt.get(t)
    if (o && o[e]) {
      const t = o[e][s]
      t && (globalThis.clearTimeout(t), delete o[e][s])
    }
  }
  function dt(e, t) {
    const s = tt.get(e)
    s &&
      s.responseTimeouts &&
      (s.responseTimeouts[t] = globalThis.setTimeout(
        () => mt({ frames: [{ windowId: t, processed: !0 }], sessionId: e }),
        Ye
      ))
  }
  function ct(e, t, s) {
    e.forEach((e, o) => {
      const n = t + je + o
      e.removeAttribute(Fe.WIN_ID_ATTRIBUTE_NAME)
      try {
        ut(e.contentWindow, { method: Ve, windowId: n, sessionId: s })
      } catch (e) {}
    }),
      e.forEach((e, o) => {
        const n = t + je + o
        let a
        try {
          a = e.contentDocument
        } catch (e) {}
        if (a)
          try {
            ct(gt(a), n, s)
          } catch (e) {}
      })
  }
  function mt(e) {
    e.method = Be
    try {
      Xe.singlefile.processors.frameTree.initResponse(e)
    } catch (t) {
      ut(Xe, e, !0)
    }
  }
  function ut(e, t, s) {
    if (e == Xe && Ke && Ke.runtime && Ke.runtime.sendMessage)
      Ke.runtime.sendMessage(t)
    else if (s) {
      const s = new Ze()
      e.postMessage(
        S + $e.stringify({ method: t.method, sessionId: t.sessionId }),
        We,
        [s.port2]
      ),
        s.port1.postMessage(t)
    } else e.postMessage(S + $e.stringify(t), We)
  }
  function pt(e, t, s, o, n) {
    const a = Fe.preProcessDoc(e, t, o),
      i = Fe.serialize(e)
    Fe.postProcessDoc(e, a.markedElements, a.invalidElements)
    return {
      windowId: s,
      content: i,
      baseURI: e.baseURI.split('#')[0],
      url: e.location.href,
      title: e.title,
      canvases: a.canvases,
      fonts: a.fonts,
      stylesheets: a.stylesheets,
      images: a.images,
      posters: a.posters,
      videos: a.videos,
      usedFonts: a.usedFonts,
      shadowRoots: a.shadowRoots,
      scrollPosition: a.scrollPosition,
      scrolling: n,
      adoptedStyleSheets: a.adoptedStyleSheets,
      processed: !0,
    }
  }
  function gt(e) {
    let t = Array.from(e.querySelectorAll(Ue))
    return (
      e.querySelectorAll(qe).forEach(e => {
        const s = Fe.getShadowRoot(e)
        s && (t = t.concat(...s.querySelectorAll(Ue)))
      }),
      t
    )
  }
  tt || (tt = globalThis.sessions = new Map()),
    Ge &&
      ((et = '0'),
      Ke &&
        Ke.runtime &&
        Ke.runtime.onMessage &&
        Ke.runtime.onMessage.addListener &&
        Ke.runtime.onMessage.addListener(e =>
          e.method == Be
            ? (it(e), Promise.resolve({}))
            : e.method == He
            ? (lt('requestTimeouts', e.sessionId, e.windowId),
              dt(e.sessionId, e.windowId),
              Promise.resolve({}))
            : void 0
        )),
    st(),
    new Qe(st).observe(Je, { childList: !0 })
  const ht = [
      'AREA',
      'BASE',
      'BR',
      'COL',
      'COMMAND',
      'EMBED',
      'HR',
      'IMG',
      'INPUT',
      'KEYGEN',
      'LINK',
      'META',
      'PARAM',
      'SOURCE',
      'TRACK',
      'WBR',
    ],
    ft = 1,
    Et = 3,
    Tt = 8,
    bt = [
      {
        tagName: 'HEAD',
        accept: e => !e.childNodes.length || e.childNodes[0].nodeType == ft,
      },
      { tagName: 'BODY', accept: e => !e.childNodes.length },
    ],
    yt = [
      { tagName: 'HTML', accept: e => !e || e.nodeType != Tt },
      {
        tagName: 'HEAD',
        accept: e =>
          !e || (e.nodeType != Tt && (e.nodeType != Et || !At(e.textContent))),
      },
      { tagName: 'BODY', accept: e => !e || e.nodeType != Tt },
      {
        tagName: 'LI',
        accept: (e, t) =>
          (!e &&
            t.parentElement &&
            ('UL' == vt(t.parentElement) || 'OL' == vt(t.parentElement))) ||
          (e && ['LI'].includes(vt(e))),
      },
      { tagName: 'DT', accept: e => !e || ['DT', 'DD'].includes(vt(e)) },
      {
        tagName: 'P',
        accept: e =>
          e &&
          [
            'ADDRESS',
            'ARTICLE',
            'ASIDE',
            'BLOCKQUOTE',
            'DETAILS',
            'DIV',
            'DL',
            'FIELDSET',
            'FIGCAPTION',
            'FIGURE',
            'FOOTER',
            'FORM',
            'H1',
            'H2',
            'H3',
            'H4',
            'H5',
            'H6',
            'HEADER',
            'HR',
            'MAIN',
            'NAV',
            'OL',
            'P',
            'PRE',
            'SECTION',
            'TABLE',
            'UL',
          ].includes(vt(e)),
      },
      { tagName: 'DD', accept: e => !e || ['DT', 'DD'].includes(vt(e)) },
      { tagName: 'RT', accept: e => !e || ['RT', 'RP'].includes(vt(e)) },
      { tagName: 'RP', accept: e => !e || ['RT', 'RP'].includes(vt(e)) },
      { tagName: 'OPTGROUP', accept: e => !e || ['OPTGROUP'].includes(vt(e)) },
      {
        tagName: 'OPTION',
        accept: e => !e || ['OPTION', 'OPTGROUP'].includes(vt(e)),
      },
      {
        tagName: 'COLGROUP',
        accept: e =>
          !e || (e.nodeType != Tt && (e.nodeType != Et || !At(e.textContent))),
      },
      {
        tagName: 'CAPTION',
        accept: e =>
          !e || (e.nodeType != Tt && (e.nodeType != Et || !At(e.textContent))),
      },
      {
        tagName: 'THEAD',
        accept: e => !e || ['TBODY', 'TFOOT'].includes(vt(e)),
      },
      {
        tagName: 'TBODY',
        accept: e => !e || ['TBODY', 'TFOOT'].includes(vt(e)),
      },
      { tagName: 'TFOOT', accept: e => !e },
      { tagName: 'TR', accept: e => !e || ['TR'].includes(vt(e)) },
      { tagName: 'TD', accept: e => !e || ['TD', 'TH'].includes(vt(e)) },
      { tagName: 'TH', accept: e => !e || ['TD', 'TH'].includes(vt(e)) },
    ],
    It = [
      'STYLE',
      'SCRIPT',
      'XMP',
      'IFRAME',
      'NOEMBED',
      'NOFRAMES',
      'PLAINTEXT',
      'NOSCRIPT',
    ]
  function wt(e, t, s) {
    return e.nodeType == Et
      ? (function (e) {
          const t = e.parentNode
          let s
          t && t.nodeType == ft && (s = vt(t))
          return !s || It.includes(s)
            ? 'SCRIPT' == s || 'STYLE' == s
              ? e.textContent.replace(/<\//gi, '<\\/').replace(/\/>/gi, '\\/>')
              : e.textContent
            : e.textContent
                .replace(/&/g, '&amp;')
                .replace(/\u00a0/g, '&nbsp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
        })(e)
      : e.nodeType == Tt
      ? '\x3c!--' + e.textContent + '--\x3e'
      : e.nodeType == ft
      ? (function (e, t, s) {
          const o = vt(e),
            n = t && bt.find(t => o == vt(t) && t.accept(e))
          let a = ''
          ;(n && !e.attributes.length) ||
            ((a = '<' + o.toLowerCase()),
            Array.from(e.attributes).forEach(
              s =>
                (a += (function (e, t, s) {
                  const o = e.name
                  let n = ''
                  if (!o.match(/["'>/=]/)) {
                    let a,
                      i = e.value
                    s &&
                      'class' == o &&
                      (i = Array.from(t.classList)
                        .map(e => e.trim())
                        .join(' ')),
                      (i = i
                        .replace(/&/g, '&amp;')
                        .replace(/\u00a0/g, '&nbsp;')),
                      i.includes('"') &&
                        (i.includes("'") || !s
                          ? (i = i.replace(/"/g, '&quot;'))
                          : (a = !0))
                    const r = !s || i.match(/[ \t\n\f\r'"`=<>]/)
                    ;(n += ' '),
                      e.namespace
                        ? 'http://www.w3.org/XML/1998/namespace' ==
                          e.namespaceURI
                          ? (n += 'xml:' + o)
                          : 'http://www.w3.org/2000/xmlns/' == e.namespaceURI
                          ? ('xmlns' !== o && (n += 'xmlns:'), (n += o))
                          : 'http://www.w3.org/1999/xlink' == e.namespaceURI
                          ? (n += 'xlink:' + o)
                          : (n += o)
                        : (n += o),
                      '' != i &&
                        ((n += '='),
                        r && (n += a ? "'" : '"'),
                        (n += i),
                        r && (n += a ? "'" : '"'))
                  }
                  return n
                })(s, e, t))
            ),
            (a += '>'))
          'TEMPLATE' != o || e.childNodes.length
            ? Array.from(e.childNodes).forEach(
                e => (a += wt(e, t, s || 'svg' == o))
              )
            : (a += e.innerHTML)
          const i = t && yt.find(t => o == vt(t) && t.accept(e.nextSibling, e))
          ;(s || (!i && !ht.includes(o))) && (a += '</' + o.toLowerCase() + '>')
          return a
        })(e, t, s)
      : void 0
  }
  function At(e) {
    return Boolean(e.match(/^[ \t\n\f\r]/))
  }
  function vt(e) {
    return e.tagName && e.tagName.toUpperCase()
  }
  const St = {
      frameTree: Object.freeze({
        __proto__: null,
        getAsync: function (e) {
          const t = ot()
          return (
            (e = $e.parse($e.stringify(e))),
            new Promise(s => {
              tt.set(t, {
                frames: [],
                requestTimeouts: {},
                responseTimeouts: {},
                resolve: e => {
                  ;(e.sessionId = t), s(e)
                },
              }),
                nt({ windowId: et, sessionId: t, options: e })
            })
          )
        },
        getSync: function (e) {
          const t = ot()
          ;(e = $e.parse($e.stringify(e))),
            tt.set(t, {
              frames: [],
              requestTimeouts: {},
              responseTimeouts: {},
            }),
            (function (e) {
              const t = e.sessionId,
                s = globalThis[Fe.WAIT_FOR_USERSCRIPT_PROPERTY_NAME]
              delete globalThis._singleFile_cleaningUp,
                Ge || (et = globalThis.frameId = e.windowId)
              rt(Je, e.options, et, t),
                Ge ||
                  (e.options.userScriptEnabled &&
                    s &&
                    s(Fe.ON_BEFORE_CAPTURE_EVENT_NAME),
                  mt({
                    frames: [pt(Je, globalThis, et, e.options, e.scrolling)],
                    sessionId: t,
                    requestedFrameId:
                      Je.documentElement.dataset.requestedFrameId && et,
                  }),
                  e.options.userScriptEnabled &&
                    s &&
                    s(Fe.ON_AFTER_CAPTURE_EVENT_NAME),
                  delete Je.documentElement.dataset.requestedFrameId)
            })({ windowId: et, sessionId: t, options: e })
          const s = tt.get(t).frames
          return (s.sessionId = t), s
        },
        cleanup: function (e) {
          tt.delete(e),
            at({ windowId: et, sessionId: e, options: { sessionId: e } })
        },
        initResponse: it,
        TIMEOUT_INIT_REQUEST_MESSAGE: ze,
      }),
    },
    Rt = {
      COMMENT_HEADER: 'Page saved with SingleFile',
      COMMENT_HEADER_LEGACY: 'Archive processed by SingleFile',
      ON_BEFORE_CAPTURE_EVENT_NAME: R,
      ON_AFTER_CAPTURE_EVENT_NAME: N,
      WAIT_FOR_USERSCRIPT_PROPERTY_NAME: v,
      preProcessDoc: de,
      postProcessDoc: fe,
      serialize: (e, t) =>
        (function (e, t) {
          const s = e.doctype
          let o = ''
          return (
            s &&
              ((o = '<!DOCTYPE ' + s.nodeName),
              s.publicId
                ? ((o += ' PUBLIC "' + s.publicId + '"'),
                  s.systemId && (o += ' "' + s.systemId + '"'))
                : s.systemId && (o += ' SYSTEM "' + s.systemId + '"'),
              s.internalSubset && (o += ' [' + s.internalSubset + ']'),
              (o += '> ')),
            o + wt(e.documentElement, t)
          )
        })(e, t),
      getShadowRoot: pe,
    }
  !(function e() {
    ae(
      C,
      () =>
        (globalThis[v] = async e => {
          const t = new re(e + '-request', { cancelable: !0 }),
            s = new Promise(t => ae(e + '-response', t))
          ;(e => {
            try {
              globalThis.dispatchEvent(e)
            } catch (e) {}
          })(t),
            t.defaultPrevented && (await s)
        })
    ),
      new le(e).observe(globalThis.document, { childList: !0 })
  })(),
    (e.helper = Rt),
    (e.processors = St),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
