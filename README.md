# HearthIntellect-Pages

Front-end pages for [HearthIntellect](https://github.com/Mr-Dai/HearthIntellect).

## 使用说明

在 `cards.js` 中定义了一个 `cards` 数组，里面包含了测试时可用的所有卡牌，包括各种不同类型的卡牌。每张卡牌包含的信息大致如下：

```json
{
  "HHID": 32,
  "name": "Al'Akir the Windlord",
  "type": "MINION",
  "cost": 8,
  "attack": 3,
  "health": 5,
  "effect": "<b>Windfury, Charge, Divine Shield, Taunt<\/b>",
  "description": "He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.",
  "quality": "LEGENDARY",
  "set": "CLASSIC",
  "playerClass": "SHAMAN",
  "mechanics": [ 2, 5, 14, 15 ],
  "quotes": [
    {
      "line": "Winds! Obey my command!",
      "link": "VO_NEW1_010_Play_01",
      "type": "PLAY"
    },
    {
      "line": "Like swatting insects!",
      "link": "VO_NEW1_010_Attack_02",
      "type": "ATTACK"
    },
    {
      "link": "VO_NEW1_010_Death_03",
      "type": "DEATH"
    }
  ],
  "image": "NEW1_010"
}
```

下表大致讲述了每个域的意思：

<table>
	<tr>
		<th>域名</th>
		<th>意思</th>
	</tr>
	<tr>
		<td><code>HHID</code></td>
		<td>卡牌在 <a href="http://www.hearthhead.com/">HearthHead</a> 上的 ID 值。如上面的奥拉基尔的 <code>HHID</code> 值为 <code>32</code>，那就可以通过链接 <a href="http://www.hearthhead.com/card=32">http://www.hearthhead.com/card=32/</a> 访问他在 HearthHead 上的信息页</td>
	</tr>
	<tr>
		<td><code>name</code></td>
		<td>卡牌的名称</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>枚举值，卡牌的类型。将在下文详述</td>
	</tr>
	<tr>
		<td><code>cost</code></td>
		<td>卡牌的法力消耗</td>
	</tr>
	<tr>
		<td><code>attack</code></td>
		<td>卡牌的攻击力。该域不存在于如法术牌这样的牌中</td>
	</tr>
	<tr>
		<td><code>health</code></td>
		<td>卡牌的生命值。该域不存在于如法术牌这样的牌中。武器牌的生命值即为其耐久度</td>
	</tr>
	<tr>
		<td><code>effect</code></td>
		<td>卡牌的效果文本</td>
	</tr>
	<tr>
		<td><code>description</code></td>
		<td>卡牌的介绍文本</td>
	</tr>
	<tr>
		<td><code>quality</code></td>
		<td>卡牌的稀有度</td>
	</tr>
	<tr>
		<td><code>set</code></td>
		<td>枚举值，卡牌所属的卡集。将在下文详述</td>
	</tr>
	<tr>
		<td><code>playerClass</code></td>
		<td>枚举值，卡牌所属的职业。将在下文详述</td>
	</tr>
	<tr>
		<td><code>mechanics</code></td>
		<td>枚举值，卡牌的机制。将在下文详述</td>
	</tr>
	<tr>
		<td><code>quotes</code></td>
		<td>随从卡的台词，大致包括打出时的台词、攻击台词和死亡台词。部分随从卡还包括除这三类台词之外的台词。每个台词对象中会给出台词文本、台词音效链接以及台词类型。链接的使用方式将在下文详述</td>
	</tr>
	<tr>
		<td><code>image</code></td>
		<td>卡牌图片的链接。使用方式将在下文详述</td>
	</tr>
	<tr>
		<td><code>race</code></td>
		<td>枚举值，随从卡的种族。部分卡牌可能不包含该域。将在下文详述</td>
	</tr>
</table>

### 卡牌图片链接

在卡牌对象中的 `image` 域会给出卡牌图片的链接，如上面出现的奥拉基尔的图片链接为 `NEW1_010`。HearthHead 的 CDN 为卡牌提供了较小的缩略图、普通卡牌的静态图以及金色卡牌的动态图。缩略图可以用于在卡牌画廊中展示，供用户浏览，而剩余的两张大图则放在卡牌专属的信息页中，参考 HearthHead。链接格式如下：

- 缩略图：`http://wow.zamimg.com/images/hearthstone/cards/enus/medium/${image}.png`
- 普通静态图：`http://wow.zamimg.com/images/hearthstone/cards/enus/original/${image}.png`
- 金色动态图：`http://wow.zamimg.com/images/hearthstone/cards/enus/animated/${image}_premium.gif`

比如奥拉基尔的图片就分别为：

<table>
	<tr>
		<th>缩略图</th>
		<th>普通静态图</th>
		<th>金色动态图</th>
	</tr>
	<tr>
		<td><img style="width: 200px" src="http://wow.zamimg.com/images/hearthstone/cards/enus/medium/NEW1_010.png"></td>
		<td><img style="width: 227px" src="http://wow.zamimg.com/images/hearthstone/cards/enus/original/NEW1_010.png"></td>
		<td><img style="width: 227px" src="http://wow.zamimg.com/images/hearthstone/cards/enus/animated/NEW1_010_premium.gif"></td>
	</tr>
	<tr>
		<td>http://wow.zamimg.com/images/ hearthstone/cards/enus/ medium/NEW1_010.png</td>
		<td>http://wow.zamimg.com/images/ hearthstone/cards/enus/ original/NEW1_010.png</td>
		<td>http://wow.zamimg.com/images/ hearthstone/cards/enus/ animated/NEW1_010_premium.gif</td>
	</tr>
</table>

### 台词链接

HearthHead 的 CDN 同样提供了随从卡音效的链接，链接格式如下：

`http://wow.zamimg.com/hearthhead/sounds/${sound}.${suffix}`

其中后缀可以是 `ogg` 或者 `mp3`。

以奥拉基尔为例：

- 打出：[http://wow.zamimg.com/hearthhead/sounds/VO_NEW1_010_Play_01.mp3](http://wow.zamimg.com/hearthhead/sounds/VO_NEW1_010_Play_01.mp3)
- 攻击：[http://wow.zamimg.com/hearthhead/sounds/VO_NEW1_010_Attack_02.mp3](http://wow.zamimg.com/hearthhead/sounds/VO_NEW1_010_Attack_02.mp3)
- 死亡：[http://wow.zamimg.com/hearthhead/sounds/VO_NEW1_010_Death_03.mp3](http://wow.zamimg.com/hearthhead/sounds/VO_NEW1_010_Death_03.mp3)

### 枚举值

包括卡牌机制、所属职业、所属卡集、种族、类型、稀有度在内的六个枚举值均在 `enums.js` 中给出。其中，单个卡牌机制对象的格式大致如下：

```json
{
	"id":5,
	"name":"Divine Shield",
	"description":"The first time this minion takes damage, ignore it."
}
```
